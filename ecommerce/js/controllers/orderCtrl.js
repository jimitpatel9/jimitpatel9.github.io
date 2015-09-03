(function() {
	
var app=angular.module('app');
// body...
var orderCtrl=function($scope,orderdata,$rootScope,$stateParams){
	$scope.itemList=orderdata;
	$scope.username=$stateParams.username;
	$scope.totalQty=0;
	$scope.totalPrice=0;
	for(var i=0;i < $scope.itemList.cartItem.length; i++){
		$scope.totalQty +=$scope.itemList.cartItem[i].qty;
		$scope.totalPrice +=($scope.itemList.cartItem[i].qty * $scope.itemList.cartItem[i].price);
	}
	$scope.clearCart=function(){
		$scope.itemList=null;
		$scope.totalQty=0;
		$scope.totalPrice=0;
	}
	
};



app.controller('orderCtrl',orderCtrl);
	
})();