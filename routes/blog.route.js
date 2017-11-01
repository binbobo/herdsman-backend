var express = require('express');
var router = express.Router();

var blogController = require('../controllers/blog.controller');

router.get('/', blogController.list);

router.get('/blog/:id', blogController.getById);

router.put('/blog/:id', blogController.update);

router.post('/blog', blogController.create);


module.exports = router;
