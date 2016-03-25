var express = require('express'); 
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser'); 

var app = express(); 
	console.log('Express app successfully created');

app.use(express.static(path.join(__dirname, '/client/static'))); 
app.use(bodyParser.urlencoded()); 

app.set('views', path.join(__dirname, '/client/views/'));
app.set('view engine', 'ejs');
	console.log('Static & view directory set');

require('./server/config/mongoose.js'); 
	console.log('mongoose configuration set');

require('./server/config/routes.js')(app);

app.listen(8888, function(){
	console.log('Listening at port: 8888'); 
});                                                       