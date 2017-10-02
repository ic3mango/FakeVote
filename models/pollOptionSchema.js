const { Schema } = require('mongoose');

const pollOptionSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  votes: {
    type: Number,
    default: 0
  }
});

module.exports = pollOptionSchema;
