(function() {
	
var app=angular.module('app');
// body...
var loginCtrl=function($scope,$location,$routeParams){
	$scope.user=[{
		username:'jimit',
		password:'jimit',
		email:'jimit@jimit'
	},
	{
		username:'demo',
		password:'demo',
		email:'demo@demo'
	}];
	console.log('login',$scope);
	var obj=$scope.user[0];
	obj.username=$routeParams.username;
	obj.password=$routeParams.password;
	obj.email=$routeParams.email
	$scope.user.push(obj);
	$scope.validateLogin=function(){
		var tracker=false;
		console.log(obj);
		for(var i=0;i<$scope.user.length;i++){
			if($scope.user[i].username===$scope.username && 
				$scope.user[i].password===$scope.password){
				
				tracker=true;
			}
		}
		if(tracker===true){
			$location.path('/user/'+ $scope.username);
			$scope.error=false;
		}
		else{
			$scope.error="Username and Password do not Match!!!";

		}
	};
	$scope.signupform=function(){
		$location.path('/userdetail');
	}
};



app.controller('loginCtrl',loginCtrl);
	
})();