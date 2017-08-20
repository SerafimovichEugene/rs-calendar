import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import config from './config';
import auth from './app/routes/auth';
import users from './app/routes/users';
import events from './app/routes/events';
import speakers from './app/routes/speakers';
import verify from './app/middlewares/verify';
import addSpeaker from './app/routes/addSpeaker';
import addEvent from './app/routes/addEvent';
import deleteEvent from './app/routes/deleteEvent';
import deleteSpeaker from './app/routes/deleteSpeaker';

const app = express();
const port = process.env.PORT || 8081;
mongoose.connect(config.database);
app.set('secretWord', config.secret);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors({ credentials: true, origin: true }));
app.use('/events', events);
app.use('/speakers', speakers);
app.use('/auth', auth); // to get token
app.use('/users', verify, users);
app.use('/addSpeaker', verify, addSpeaker);
app.use('/addEvent', verify, addEvent);
app.use('/deleteEvent', verify, deleteEvent);
app.use('/deleteSpeaker', verify, deleteSpeaker);
// app.use('/events:id', eventsId);
// app.use('/speakers:id', speakersId);
app.get('/', (req, res) => {
  res.write('Hello, this is RS Calendar API');
  res.end();
});
app.all('*', (req, res) => {
  res.json({ error: 'wrong route' });
});
app.listen(port, () => {
  console.log(`Running Express on port - ${port}`);
});
