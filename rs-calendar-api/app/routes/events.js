import express from 'express';
import Event from '../models/event';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    Event.find({}, (err, events) => {
      if (err) {
        res.status(500).send();
      } else {
        res.json(events);
      }
    });
  });

export default router;
