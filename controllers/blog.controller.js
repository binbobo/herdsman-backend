var BlogSchema = require('../models/blog.model');
var mongoose = require('mongoose');

// Doc Ref
var BlogModel = mongoose.model('Blog', BlogSchema);

// 获取所有blogs
var list = function (req, res) {
  BlogModel.find({}, function (err, blogs) {
    if (err) return handleError(err);

    res.send(JSON.stringify({
      length: blogs.length,
      data: blogs
    }));
  });
};

// 创建一个新的blog
var create = function (req, res) {
  var blog = new BlogModel(req.body);
  blog.save(function (err, blog) {
    if (err) return handleError(err);
    res.send(blog);
  });
};

// 根据id获取blog
var getById = function (req, res) {
  BlogModel.find({'_id': req.query.id}, function (err, blog) {
    if (err) return handleError(err);

    if (blog.length) {
      res.send(JSON.stringify(blog[0]));
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
};

// 修改blog信息
var update = function (req, res) {
  // 获取post body
  BlogModel.findByIdAndUpdate(req.body.id, {$set: req.body}, {new: true}, function (err, blog) {
    if (err) return handleError(err);
    res.send(JSON.stringify(blog));
  });
};

// mongodb crud errror handler
function handleError(err) {
  console.log(err);
}

module.exports = {
  list: list,
  create: create,
  getById: getById,
  update: update
};
