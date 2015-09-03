(function() {
	
var app=angular.module('app');
// body...
var loginCtrl=function($scope,userdata,$rootScope){
	var userinfo=userdata;
	
	$scope.closeAlert = function() {
	    $scope.alert=null;
	  };
	$scope.validateLogin=function(){
		var tracker=false;
		for(var i=0;i<userinfo.userdata.length;i++){
			if(userinfo.userdata[i].username===$scope.username && 
				userinfo.userdata[i].password===$scope.password){
				
				tracker=true;
			}
		}
		if(tracker===true){
			
			$scope.error=false;
		}
		else{
			$scope.error="Username and Password do not Match!!!";

		}
	};
	$rootScope.$on('$stateChangeStart', 
		function(event, toState, toParams, fromState, fromParams){ 
		    if(fromState==='userdetail') {
		    	$scope.alert='Welcome to Online Shopping App !';
		    }
		    // transitionTo() promise will be rejected with 
		    // a 'transition prevented' error
		})
	
};



app.controller('loginCtrl',loginCtrl);
	
})();