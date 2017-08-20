import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const user = mongoose.model('User', new Schema({
  name: String,
  password: String,
  admin: Boolean,
}));
export default user;
