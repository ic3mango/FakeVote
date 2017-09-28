const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  twitterId: String
});

mongoose.model('users', userSchema);
