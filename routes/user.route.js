var express = require('express');
var router = express.Router();

var userController = require('../controllers/user.controller');

// 登录
router.post('/login', userController.login);

// 注册
router.post('/register', userController.register);

module.exports = router;
