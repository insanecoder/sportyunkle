var HomeController = require('./controller/HomeController');

// Routes
module.exports = function(app){
     
    app.get('/desc/:id', function(request, response){
    	console.log('Book details from book id ' + request.params.id);
	});

	app.get('/home', HomeController.homePage);
	
};
