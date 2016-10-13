'use strict'
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '/css/')));
app.use(express.static(path.join(__dirname, '/img/')));
app.use(express.static(path.join(__dirname, '/html/')));


app.get('/home',function(req,res){
  res.sendFile(path.join(__dirname + '/html/index.html'));
});

var port;
if(!process.env.PORT){
  console.log('port not set in operating system environment variable');
  console.log('using port 3000 by default');
  port = 3000;
}
else {
  console.log('env variable PORT is set to' ,   process.env.PORT);
  port = process.env.PORT;
}
app.listen(port);
