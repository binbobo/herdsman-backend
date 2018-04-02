const express = require('express');
const router = express.Router();

const controller = require('../controllers/blog.controller');

router.get('/', controller.list);

router.get('/blog/:id', controller.getById);

router.put('/blog/:id', controller.update);

router.post('/blog', controller.create);


module.exports = router;
