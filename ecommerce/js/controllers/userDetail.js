(function() {
	
var app=angular.module('app');
// body...
var userDetail=function($scope,userdata,$state){
	var adduser=userdata;
	$scope.addUserData=function(){
		adduser.userdata.push({
								username:$scope.username,
								password:$scope.password,
								email:$scope.email
							});
		if($scope.username && $scope.password && $scope.email){
			$state.go('login');
		}
		
	}
	
};



app.controller('userDetail',userDetail);
	
})();