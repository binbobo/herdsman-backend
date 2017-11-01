var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  account: String,
  password: String,
  nickname: String,
  email: String
});

module.exports = UserSchema;
