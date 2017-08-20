import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import config from '../../config';

const parseUrlEncoded = bodyParser.urlencoded({ extended: false });
const router = express.Router();

// const cookieOptions =
//   {
//     expires: new Date(Date.now() + (60 * 60 * 24 * 1000)),
//     httpOnly: true,
//     secure: true,
//   };

router.route('/')
  .post(parseUrlEncoded, (req, res) => {
    User.findOne({ name: req.body.login }, (err, user) => {
      if (err) throw err;
      if (!user) {
        res.status(201).cookie('token', false).json({ success: false, msg: 'user not found' });
      } else if (user.password !== req.body.password) {
        res.status(201).cookie('token', false).json({ success: false, msg: 'wrong password' });
      } else {
        const token = jwt.sign(user, config.secret, { expiresIn: 60 * 60 * 24 });
        res.status(201)
          .cookie('token', token)
          .cookie('userName', user.name)
          .json({ success: true, msg: 'success' });
      }
    });
  })
  .get((req, res) => {
    jwt.verify(req.cookies.token, config.secret, (err, decoded) => {
      if (err) {
        res.json({ verify: false });
      } else {
        res.json({ verify: true, name: decoded._doc.name });
      }
    });
  });

export default router;
