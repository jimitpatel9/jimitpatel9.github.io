(function() {
	
var app=angular.module('app');
// body...
var userCtrl=function($scope,$stateParams,$state,orderdata){
	$scope.username=$stateParams.username;
    $scope.itemList=orderdata;
	$scope.add=function(index,qty){
		$scope.itemList.iteminfo[index].qty=qty;
		$scope.itemList.cartItem.push($scope.itemList.iteminfo[index]);
		$state.go('orderPage',{username:$scope.username});
		
	}
	
};



app.controller('userCtrl',userCtrl);
	
})();