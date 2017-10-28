var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

app.all('*', function (req, res) {
  res.sendFile('index.html');
});

http.createServer(app).listen(app.get('port'), function () {
  console.log(
    'Express.js server listening on port ' +
    app.get('port')
  );
});