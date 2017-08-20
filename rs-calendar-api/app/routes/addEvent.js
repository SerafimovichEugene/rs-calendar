import express from 'express';
import bodyParser from 'body-parser';
import Event from '../models/event';

function checkForData() {
  let check = true;
  for (let i = 0; i < arguments.length; i++) {
    if (!arguments[i]) {
      check = false;
    }
  }
  return check;
}

const parseUrlEncoded = bodyParser.urlencoded({ extended: false });
const router = express.Router();

router.route('/')
  .post(parseUrlEncoded, (req, res) => {
    const type = req.body.type; // string
    const location = req.body.location; // 'Belarus, Minsk, Купревича 1к2, а.402'
    const duration = req.body.duration; // "~307 min"
    const start = req.body.start; // "20.01.2017 06:22"
    const description = req.body.description; // 'bla bla bla'
    // const resources = JSON.parse(req.body.resources);
    const speakers = req.body.speakers; // [...speaker.id]
    let event = null;
    const check = checkForData(type, location, duration, start, description, speakers);
    if (check) {
      event = new Event({
        type,
        location,
        duration,
        start,
        description,
        // resources,
        speakers,
      });
      event.save((err) => {
        if (err) {
          res.json({ success: false });
        } else {
          res.json({ success: true });
        }
      });
    } else {
      res.json({ success: false, msg: 'data not valid for db' });
    }
  });

export default router;
