var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', index);

app.listen(3000, function() {
	console.log('Server started on port 3000....');
} )