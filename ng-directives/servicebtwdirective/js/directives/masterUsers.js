(function() {
	
var app=angular.module('app');
// body...
var masterUsers=function(userListState){
	return{
		restrict:'E',
		templateUrl:"masterUsers.html",
		controller:function($scope){
			$scope.state=userListState;
			userListState.selectedUser=$scope.users[0];
			console.log('mastercontroller',$scope)

		},
		scope:{
			users:'=data',
		}
	}
};



app.directive('masterUsers',masterUsers);
	
})();