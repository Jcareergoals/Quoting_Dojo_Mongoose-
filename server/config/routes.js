var mongoose = require('mongoose'); 
var Controller = require('./../controllers/quotes.js'); 

module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index');
	}); 
	app.get('/main', function(req, res){
		Controller.show(req,res); 
	}); 
	app.post('/quotes', function(req, res){
		Controller.create(req, res); 
	});
}