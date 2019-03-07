// ./jason-lisa-wedding-website/models/wedding.server.model.js
import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  firstName: {
    type: String,
    required: [true, "First name is required."],
    minLength: [2, 'First name must have at least 2 characters.']
  },
  lastName: {
    type: String,
    required: [true, "Last name is required."],
    minLength: [2, 'Last name must have at least 2 characters.']
  },
  plusOnes: [{
    id: {type: Number},
    firstName: {type: String},
    lastName: {type: String}
  }]
});

export default mongoose.model('Guest', Schema);