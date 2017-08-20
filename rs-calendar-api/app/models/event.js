import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// const ResourceSchema = new Schema({
//   description: String,
//   resource: String,
//   type: String,
// });

const event = mongoose.model('Event', new Schema({
  type: String,
  location: String,
  duration: Number,
  start: String,
  description: String,
  // resources: [ResourceSchema],
  speakers: [String],
}));
export default event;
