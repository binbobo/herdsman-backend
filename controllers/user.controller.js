const mongoose = require('mongoose');
const UserSchema = require('../models/user.model');
const DBCommonHander = require('../utils/db')

// Doc Ref
var UserModel = mongoose.model('User', UserSchema);

const login = function (req, res) {
  UserModel.findOne({'username': req.body.username}, function (err, user) {
    if (err) return DBCommonHander.errorHandler(err, res, '检查用户是否存在失败');
    if (user == null) return DBCommonHander.errorHandler(err, res, '用户不存在');
    if (user.password !== req.body.password) return DBCommonHander.errorHandler(err, res, '密码错误');
    // 设置Cookie 标识当前登陆用户
    return DBCommonHander.successHandler( res, '登陆成功', {
      name: user.username,
      email: user.email
    });
  });
};

const register = function (req, res) {
  const {username, password} = req.body
  if (!username || !password) return DBCommonHander.errorHandler(err, res, '用户名或者密码不能为空');
  UserModel.findOne({'username': req.body.username}, function (err, user) {
    if (err) return DBCommonHander.errorHandler(err, res, '检查用户是否存在失败');
    if (user != null) return DBCommonHander.errorHandler(err, res, '用户已存在');
    // 创建一个新的用户
    new UserModel(req.body).save(function (err, user) {
      if (err) return DBCommonHander.errorHandler(err, res, '注册失败');
        return DBCommonHander.successHandler( res, '注册成功', null);
      });
    });
};

module.exports = {
  login: login,
  register: register,
};
