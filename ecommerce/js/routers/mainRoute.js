(function  () {
	// body...
	var app = angular.module('app');
	app.config(['$stateProvider','$urlRouterProvider',configRoutes]);
		function configRoutes($stateProvider,$urlRouterProvider){

		$stateProvider
			.state('login',{
				url:'',
				templateUrl:'login.html',
				controller:'loginCtrl'
			})
			.state("displayProducts",{
				url:"/user/:username",
				templateUrl:"user.html",
				controller:"userCtrl"
			})
			.state("userdetail",{
				url:'/userdetail',
				templateUrl:"userdetail.html",
				controller:"userDetail"
			})
			.state("orderPage",{
				url:'/:username/order',
				templateUrl:"order.html",
				controller:"orderCtrl"
			})
			.state("checkout",{
				url:'/:username/checkout',
				templateUrl:"checkout.html",
				controller:"checkoutCtrl"
			});
			//$urlRouterProvider.otherwise({redirectTo:''});
	}
	app.run(['$state',function($state){

	}]);
}());
/*(function  () {
	// body...
	var app = angular.module("app");
	app.config(function($routeProvider){

		$routeProvider
			.when("/login",{
				templateUrl:"login.html",
				controller:"loginCtrl"
			}).when("/user/:username",{
				templateUrl:"user.html",
				controller:"userCtrl"
			}).when("/userdetail",{
				templateUrl:"userdetail.html",
				controller:"userDetail"
			})
			.otherwise({redirectTo:"/login"});
	});
}());*/