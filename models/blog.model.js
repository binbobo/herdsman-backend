var mongoose = require('mongoose');

var BlogSchema = mongoose.Schema({
  title: String,
  author: String,
  content: String,
  createdDate: {type: Date, default: Date.now},
  updatedDate: {type: Date, default: Date.now}
});

module.exports = BlogSchema;
