(function() {
	
var app=angular.module('app');
// body...
var detailUsers=function(userListState){
	return{
		restrict:'E',
		templateUrl:"detailUsers.html",
		controller:function($scope){
			$scope.state=userListState;
		},
		scope:{
			users:'=data',
		}
	}
};



app.directive('detailUsers',detailUsers);
	
})();