(function() {
	
var app=angular.module('app');
// body...
var droid=function(){
	return{
		restrict:'E',
		templateUrl:"droid.html",
		scope:{user:"="},
		controller:function($scope){
			$scope.collapsed=true;
			$scope.collapse=function(){
				$scope.collapsed=!$scope.collapsed;
			}
		}
	}
};



app.directive('droid',droid);
	
})();