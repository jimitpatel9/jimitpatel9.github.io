(function() {
	
var app=angular.module('app');
// body...
var address=function(){
	return{
		templateUrl:"address.html",
		restrict:"E",
		scope:true,
		controller:function($scope){
			$scope.collapsed=false;
			$scope.collapseAddress=function(){
				$scope.collapsed=true;
			}
			$scope.expandAddress=function(){
				$scope.collapsed=false;
			}
		}
	}
};
app.directive('address',address);
	
})();