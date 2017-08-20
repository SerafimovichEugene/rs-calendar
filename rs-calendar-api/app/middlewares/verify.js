import jwt from 'jsonwebtoken';
import config from '../../config';

export default (req, res, next) => {
  const token = req.body.token || req.query.token || req.cookies.token;
  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        res.json({ success: false, message: 'Failed to authenticate token.' });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    res.status(403).send({ success: false, message: 'No token provided.' });
  }
};
