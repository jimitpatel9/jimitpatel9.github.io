(function() {
	
var app=angular.module('app');
// body...
var displayBox=function(){
	return{
		restrict:'E',
		templateUrl:"displayBox.html",
		controller:function($scope){
			$scope.hidden =false;
			$scope.close=function(){
				$scope.hidden=true;
			}
			$scope.message="I'm Hijacking";
			console.log('directive',$scope);
		},
		transclude:true,
		scope:true
	}
};



app.directive('displayBox',displayBox);
	
})();