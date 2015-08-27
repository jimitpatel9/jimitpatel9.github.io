(function() {
	
var app=angular.module('app');
// body...
var innerCtrl=function($scope){
	
	console.log('innercontroller',$scope);
};



app.controller('innerCtrl',innerCtrl);
	
})();