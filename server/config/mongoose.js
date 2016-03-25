var mongoose = require('mongoose'); 
var fs = require('fs'); 
var path = require('path');

// connect to DB or create DB if it doesn't exist
mongoose.connect('mongodb://localhost/quoting_dojo_mongoose'); 
	console.log('db connected');
	
var models_path = path.join(__dirname, '../models'); 

// require model files from models folder
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') >= 0){
		require(models_path + '/' + file); 
	}
	console.log("all models required into mongoose configuration"); 
}); 