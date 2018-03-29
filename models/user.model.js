var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  nickname: String,
  email: String
});

module.exports = UserSchema;
