var express = require('express');
var router = express.Router();

var userController = require('../controllers/user.controller');

// 登录
router.get('/login', userController.login);

// 注册
router.post('/create', userController.create);

module.exports = router;
