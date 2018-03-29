const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');

// 引入路由
const userRoutes = require('./routes/user.route');
const blogRoutes = require('./routes/blog.route');

// 获取post req body data
const bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// MongoDb Connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog', {useMongoClient: true});

mongoose.connection
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', function () {
    console.log('connectted to mongodb!');
  });

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// 设置路由
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);

// 设置前端静态文件目录
// app.use(express.static(path.join(__dirname, 'public')));

// 设置favicon
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// 服务监听端口
app.set('port', process.env.PORT || 8080);

// 默认首页
app.get('/', function (req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

// 创建并启动服务
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express.js server listening on port ' + app.get('port'));
});
