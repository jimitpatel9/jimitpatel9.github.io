(function() {
	
var app=angular.module('app');
// body...
var mainCtrl=function($scope){
	$scope.user1 = { 
		name:"Jimit Patel",
		address :{
			street:"83 Jefferson Ave",
			city:"Jersey City",
			planet: "Earth"
		},
		friends:[
		'Rahul',
		'Rinay',
		'Ram'
		],
		level:0

	};
	$scope.user2 = { 
		name:"Jim Patel",
		address :{
			street:"84 Jefferson Ave",
			city:"Jersey City",
			planet: "Earth"
		},
		friends:[
		'Raul',
		'Rinay',
		'Ram'
		],
		level:1

	};
};



app.controller('mainCtrl',mainCtrl);
	
})();