(function  () {
	// body...
	var app = angular.module("githubViewer",["ngRoute"]);
	app.config(function($routeProvider){

		$routeProvider
			.when("/main",{
				templateUrl:"main.html",
				controller:"MainCtrl"
			})
			.when("/user/:username",{
				templateUrl:"user.html",
				controller:"userCtrl"
			})
			.when("/repo/:username/:reponame",{
				templateUrl:"repo.html",
				controller:"repoCtrl"
			})
			.otherwise({redirectTo:"/main"});
	});
}());
