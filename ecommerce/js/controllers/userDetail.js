(function() {
	
var app=angular.module('app');
// body...
var userDetail=function($scope,userdata,$state){
	

	$scope.addUserData=function(){
	
	userdata.save(function(data){
		console.log('submitted')
	},{	username:$scope.username,
		password:$scope.password,
		email:$scope.email
	});
		
		$state.go('login');
	}
	
};



app.controller('userDetail',["$scope","userdata","$state",userDetail]);
	
})();