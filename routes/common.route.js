var express = require('express');
var router = express.Router();

var controller = require('../controllers/common.controller');

// 登录
router.get('/heart', controller.heart);

module.exports = router;