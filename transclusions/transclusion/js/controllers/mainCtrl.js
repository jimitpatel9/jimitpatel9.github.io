(function() {
	
var app=angular.module('app');
// body...
var mainCtrl=function($scope){
	$scope.message="This Is message";
	console.log('controller',$scope);
};



app.controller('mainCtrl',mainCtrl);
	
})();