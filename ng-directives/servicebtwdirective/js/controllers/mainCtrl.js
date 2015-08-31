(function() {
	
var app=angular.module('app');
// body...
var mainCtrl=function($scope){
	$scope.users=[{
		name:'Luke',planet:'Tatoonie',job:'jedi'
	},{
		name:'Han',planet:'Nowhere',job:'Jedi'
	},{
		name:'Chewbacca',planet:'Kashyyyk',job:'CoPilot'
	}];
	console.log('mainctrl',$scope);
};



app.controller('mainCtrl',mainCtrl);
	
})();