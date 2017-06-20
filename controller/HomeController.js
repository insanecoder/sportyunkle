exports.homePage = function(request, response){
	responseVars={};
	responseVars.title="my d title";
	responseVars.abc={};
	responseVars.abc.var="Varrr";
    response.render('home/home',responseVars);
};
 
exports.Other = function(request, response){
    response.render('home/home');
};