(function() {
	
var app=angular.module('app');
// body...
var loginCtrl=function($scope,userdata,$state){
	var userinfo=null;
	$scope.alerts = [{ 
    	type: 'success',
    	msg: 'You successfully Registered!' 
 	}];
 	$scope.closeAlert=function(index){
 		$scope.alerts.splice(index, 1);
 		$scope.$parent.error=false;
 	};
	userdata.query(function(data){
    	userinfo=data;	
    });
	$scope.validateLogin=function(){
		var tracker=false;
		for(var i=0;i<userinfo.length;i++){
			if(userinfo[i].username===$scope.username && 
				userinfo[i].password===$scope.password){
				tracker=true;
			}
		}
		if(tracker===true){
			$scope.error=false;
			$state.go('displayProducts',{username:$scope.username});
		}
		else{
			$scope.error="Username and Password do not Match!!!";

		}
	};
	
};



app.controller('loginCtrl',
	["$scope","userdata","$state",loginCtrl]);
	
})();