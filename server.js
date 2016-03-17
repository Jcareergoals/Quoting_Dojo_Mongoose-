var express = require('express'); 
var path = require('path');
var bodyParser = require('body-parser'); 
var mongoose = require('mongoose');

var app = express(); 

app.use(express.static(path.join(__dirname, '/static'))); 
app.use(bodyParser.urlencoded()); 

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quoting_dojo_mongoose'); 

var quoteSchema = new mongoose.Schema({
	name: String, 
	quote: String, 
	date: {type: Date, default: Date.now}
}); 
mongoose.model('Quote', quoteSchema); 
var Quote = mongoose.model('Quote'); 

var route = require('./routes/index.js')(app, Quote);

app.listen(8888, function(){
	console.log('Listening at port: 8888'); 
}); 