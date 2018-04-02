var express = require('express');
var router = express.Router();

var controller = require('../controllers/user.controller');

// 登录
router.post('/login', controller.login);

// 注册
router.post('/register', controller.register);

// 退出
router.get('/logout', controller.logout);

// 获取用户信息
router.get('/profile', controller.profile);

module.exports = router;
