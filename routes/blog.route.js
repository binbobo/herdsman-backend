const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blog.controller');

router.get('/', blogController.list);

router.get('/blog/:id', blogController.getById);

router.put('/blog/:id', blogController.update);

router.post('/blog', blogController.create);


module.exports = router;
