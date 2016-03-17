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

app.get('/', function(req, res){
	res.render('index');
}); 
app.get('/main', function(req, res){
	Quote.find({}, function(err, users){
		if(err){
			console.log(err);
			res.redirect('/');
		} else {
			res.render('main', {users:users});
		}
	});
}); 
app.post('/quotes', function(req, res){
	if(!req.body.name){
		console.log("Some fields were left empty!"); 
		res.redirect('/');
	} else {
		var userQuote = new Quote({
			name: req.body.name, 
			quote: req.body.quote, 
			date: new Date
		}); 
		userQuote.save(function(err){
			if(err){
				console.log(err);
			} else {
				console.log("Quote was successfully entered into the database!"); 
				res.redirect('/main'); 
			}
		}); 
	}
		
});


app.listen(8888, function(){
	console.log('Listening at port: 8888'); 
}); 