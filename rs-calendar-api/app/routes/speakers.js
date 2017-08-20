import express from 'express';
import Speaker from '../models/speaker';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    Speaker.find({}, (err, speakers) => {
      res.json(speakers);
    });
  });

export default router;
