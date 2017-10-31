var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');

app.use(express.static(path.join(__dirname, 'public')));

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.set('port', process.env.PORT || 80);

app.all('*', function (req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

http.createServer(app).listen(app.get('port'), function () {
  console.log(
    'Express.js server listening on port ' +
    app.get('port')
  );
});
