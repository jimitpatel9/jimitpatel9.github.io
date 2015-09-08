(function() {
	
var app=angular.module('app');
// body...
var userCtrl=function($scope,$stateParams,$state,productResource,orderdata){
	$scope.username=$stateParams.username;
	$scope.cartItemList=orderdata;
    productResource.query(function(data){
    	$scope.itemList=data;	
    });

    $scope.max=5;
    $scope.isReadonly=true;
    $scope.navbarCollapsed=true;
	$scope.add=function(index,qty,pid){
		var itemPushed=true;
		for (var i = 0;i<$scope.cartItemList.cartItem.length;i++) {
			if(pid===$scope.cartItemList.cartItem[i].pid){
				$scope.cartItemList.cartItem[i].qty +=qty;
				itemPushed=false;
				break;
			}
		};
		if (itemPushed) {
			$scope.itemList[index].qty=qty;
			$scope.cartItemList.cartItem.push($scope.itemList[index]);
		};
		
		$state.go('orderPage',{username:$scope.username});
		
	}
	
};



app.controller('userCtrl',["$scope","$stateParams","$state","productResource","orderdata",userCtrl]);
	
})();