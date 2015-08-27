(function() {
	
var app=angular.module('app');
// body...
var mainCtrl=function($scope){
	$scope.user1={
		name:"Jimit Patel",
		address:{
			street:"83 Jefferson Ave",
			city:"Jersey City",
			planet:"Earth"
		},
		friends:[
		'Rahul',
		'Rohan',
		'Ram'
		]
	};
	$scope.user2={
		name:"Vipul Shah",
		address:{
			street:"95 Beacon Ave",
			city:"Jersey City",
			planet:"Earth"
		},
		friends:[
		'Mehul',
		'Mona',
		'Mayur'
		]
	};
	$scope.droid={
		name:"Sandwich",
		specification:{
			version:"3.0",
			speed:"good"
		}
	};
};



app.controller('mainCtrl',mainCtrl);
	
})();