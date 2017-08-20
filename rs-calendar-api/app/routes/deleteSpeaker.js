import express from 'express';
import bodyParser from 'body-parser';
import Speaker from '../models/speaker';

const parseUrlEncoded = bodyParser.urlencoded({ extended: false });
const router = express.Router();

router.route('/')
  .post(parseUrlEncoded, (req, res, next) => {
    Speaker.find({ _id: req.body.id }).remove((err) => {
      if (err) {
        next(err);
      } else {
        res.json({ success: true });
      }
    });
  });

export default router;
