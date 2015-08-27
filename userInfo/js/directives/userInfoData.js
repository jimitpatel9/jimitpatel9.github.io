(function() {
	
var app=angular.module('app');
// body...
var userInfoData=function(){
	return{
		restrict:'E',
		templateUrl:"userInfoData.html",
		scope:{user:"="},
		controller:function($scope){
			$scope.collapsed=true;
			$scope.collapse=function(){
				$scope.collapsed=!$scope.collapsed;
			}
		}
	}
};



app.directive('userInfoData',userInfoData);
	
})();