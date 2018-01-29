var express = require('express');
var app = express();
var path = require("path"); 

app.get('/draw/new', function(req, res){
  res.sendFile(path.join(__dirname+'./../../index.html'))
});
app.listen(3000);