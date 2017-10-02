const mongoose = require('mongoose');
const { Schema } = mongoose;
const pollOptionSchema = require('./pollOptionSchema');

const pollSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  options: [pollOptionSchema],
  dateCreated: {
    type: Date,
    default: Date.now
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  voters: [String]
});

module.exports = mongoose.model('Poll', pollSchema);
