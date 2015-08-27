(function() {
	
var app=angular.module('app');
// body...
var removeFriend=function(){
return{
		restrict:"E",
		templateUrl:"removeFriend.html",
		scope:{
			notifyParent:"&method"
		},
		controller:function($scope){
			$scope.removing=false;
			$scope.startRemove=function(){
				$scope.removing=true;
			}
			$scope.confirmRemove=function(){
				$scope.notifyParent();
			}
		}
	}
};



app.directive('removeFriend',removeFriend);
	
})();