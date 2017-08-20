import express from 'express';
import bodyParser from 'body-parser';
import Event from '../models/event';

const parseUrlEncoded = bodyParser.urlencoded({ extended: false });
const router = express.Router();

router.route('/')
  .post(parseUrlEncoded, (req, res, next) => {
    Event.find({ _id: req.body.id }).remove((err) => {
      if (err) {
        next(err);
      } else {
        res.status(200).json({ success: true });
      }
    });
  });

export default router;
