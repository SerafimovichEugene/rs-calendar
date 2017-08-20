import express from 'express';
import bodyParser from 'body-parser';
import Speaker from '../models/speaker';

const parseUrlEncoded = bodyParser.urlencoded({ extended: false });
const router = express.Router();

router.route('/')
  .post(parseUrlEncoded, (req, res) => {
    const speakerName = req.body.name;
    const ava = req.body.ava;
    const defaultAva = 'http://s3.amazonaws.com/nvest/Blank_Club_Website_Avatar_Gray.jpg';
    let speaker = null;
    if (speakerName) {
      speaker = new Speaker({
        avatar: ava || defaultAva,
        name: speakerName,
      });
      speaker.save((err) => {
        if (err) throw err;
        res.json({ success: true });
      });
    } else {
      res.json({ success: false, msg: 'no speaker name' });
    }
  });

export default router;
