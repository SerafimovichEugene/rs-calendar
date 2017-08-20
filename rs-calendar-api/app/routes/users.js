import express from 'express';
import User from '../models/user';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    User.find({}, (err, users) => {
      res.json(users);
    });
  });

export default router;
