(function() {
	
var app=angular.module('app');
// body...
var userPanel=function(){
	return{
		restrict:'E',
		templateUrl:"userPanel.html",
		transclude:true,
		scope:{user:"="},
		controller:function($scope){
			$scope.collapsed=true;
			$scope.collapse=function(){
				$scope.collapsed=!$scope.collapsed;
			}
		}
	}
};



app.directive('userPanel',userPanel);
	
})();