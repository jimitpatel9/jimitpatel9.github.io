(function() {
	
var app=angular.module('app');
// body...
var userCtrl=function($scope,$stateParams,$state,orderdata){
	$scope.username=$stateParams.username;
    $scope.itemList=orderdata;
    $scope.max=5;
    $scope.isReadonly=true;
    $scope.navbarCollapsed=true;
	$scope.add=function(index,qty,uid){
		var itemPushed=true;
		for (var i = 0;i<$scope.itemList.cartItem.length;i++) {
			if(uid===$scope.itemList.cartItem[i].uid){
				$scope.itemList.cartItem[i].qty +=qty;
				itemPushed=false;
				break;
			}
		};
		if (itemPushed) {
			$scope.itemList.iteminfo[index].qty=qty;
			$scope.itemList.cartItem.push($scope.itemList.iteminfo[index]);
		};
		
		$state.go('orderPage',{username:$scope.username});
		
	}
	
};



app.controller('userCtrl',userCtrl);
	
})();