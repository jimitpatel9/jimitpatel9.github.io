(function() {
	
var app=angular.module('app');
// body...
var mainCtrl=function($scope){
	$scope.items=[2,22,222,2222];
	
};



app.controller('mainCtrl',mainCtrl);
	
})();