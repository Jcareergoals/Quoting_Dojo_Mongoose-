var mongoose = require('mongoose'); 
var Quote = mongoose.model('Quote');

module.exports = {
	show: function(req, res){
		Quote.find({}, function(err, users){
			res.render('main', {users:users});
		});
	},
	create: function(req, res){
		if(!req.body.name || !req.body.quote){
			console.log("Some fields were left empty!"); 
			res.redirect('/');
		} else {
			var quote = new Quote({
				name: req.body.name, 
				quote: req.body.quote, 
				date: new Date
			});  
			quote.save(function(err){
				if(err){
					console.log(err); 
				}
				res.redirect('/main');
			}); 
		}
	}
}