var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
	name: String, 
	quote: String, 
	date: {type: Date, default: Date.now}
}); 

// validations
// quoteSchema.path('name').required(true, 'The name field cannot be blank'); 
// quoteSchema.path('quote').required(true, 'The quote field cannot be blank'); 

mongoose.model('Quote', QuoteSchema); 
var Quote = mongoose.model('Quote'); 
