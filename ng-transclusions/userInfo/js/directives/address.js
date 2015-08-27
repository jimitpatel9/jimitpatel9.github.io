(function() {
	
var app=angular.module('app');
// body...
var address=function(){
	return{
		restrict:'E',
		templateUrl:"address.html",
		scope:true,
		controller:function($scope){
			$scope.collapsed=true;
			$scope.collapse=function(){
				$scope.collapsed=!$scope.collapsed;
			}
		}
	}
};



app.directive('address',address);
	
})();