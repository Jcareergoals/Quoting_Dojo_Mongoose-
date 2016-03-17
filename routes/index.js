module.exports = function Route(app, Quote){
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
}