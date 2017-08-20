import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const speaker = mongoose.model('Speaker', new Schema({
  avatar: String,
  name: String,
}));
export default speaker;
