const mongoose = require('mongoose');
const UserSchema = require('../models/user.model');

const login = function (req, res) {
  res.send('user login');
};

const register = function (req, res) {
  res.send('user register');
};

module.exports = {
  login: login,
  register: register,
};
