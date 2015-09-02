(function() {
	
var app=angular.module('app');
// body...
var userDetail=function($scope,$location){
	$scope.storedata=function(){
		$location.path('/login');

	}
	console.log('userdetails',$scope);
};



app.controller('userDetail',userDetail);
	
})();