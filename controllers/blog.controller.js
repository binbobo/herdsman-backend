const BlogSchema = require('../models/blog.model');
const mongoose = require('mongoose');
const DBCommonHander = require('../utils/db')
// Doc Ref
const BlogModel = mongoose.model('Blog', BlogSchema);

// 获取所有blogs
const list = function (req, res) {
  BlogModel.find({}, function (err, blogs) {
    if (err) return DBCommonHander.errorHandler(err);

    res.send(JSON.stringify({
      length: blogs.length,
      data: blogs
    }));
  });
};

// 创建一个新的blog
const create = function (req, res) {
  const blog = new BlogModel(req.body);
  blog.save(function (err, blog) {
    if (err) return DBCommonHander.errorHandler(err);
    res.send(blog);
  });
};

// 根据id获取blog
const getById = function (req, res) {
  BlogModel.find({'_id': req.query.id}, function (err, blog) {
    if (err) return DBCommonHander.errorHandler(err);

    if (blog.length) {
      res.send(JSON.stringify(blog[0]));
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
};

// 修改blog信息
const update = function (req, res) {
  // 获取post body
  BlogModel.findByIdAndUpdate(req.body.id, {$set: req.body}, {new: true}, function (err, blog) {
    if (err) return DBCommonHander.errorHandler(err);
    res.send(JSON.stringify(blog));
  });
};

module.exports = {
  list: list,
  create: create,
  getById: getById,
  update: update
};
