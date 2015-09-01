(function  () {
	// body...
	var app = angular.module("app");
	app.config(function($routeProvider){

		$routeProvider
			.when("/main",{
				templateUrl:"main.html",
				controller:"mainCtrl"
			})
			.otherwise({redirectTo:"/main"});
	});
}());