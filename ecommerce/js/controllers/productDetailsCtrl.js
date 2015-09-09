(function() {
	
var app=angular.module('app');
// body...
var productDetailsCtrl=function($scope,product){
	$scope.product=product;
	//Navbar
	$scope.navbarCollapsed=true;
	//Ratings
	$scope.max=5;
    $scope.isReadonly=true;
};



app.controller('productDetailsCtrl',
	["$scope","product",productDetailsCtrl]);
	
})();