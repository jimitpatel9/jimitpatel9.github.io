(function() {
	
var app=angular.module('app');
// body...
var innerCtrl=function($scope){
	console.log('innerCtrl',$scope);
};



app.controller('innerCtrl',innerCtrl);
	
})();