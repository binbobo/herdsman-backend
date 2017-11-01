var mongoose = require('mongoose');
var UserSchema = require('../models/user.model');

var login = function (req, res) {
  res.send('user login');
};

var create = function (req, res) {
  res.send('user register');
};

module.exports = {
  login: login,
  create: create,
};
