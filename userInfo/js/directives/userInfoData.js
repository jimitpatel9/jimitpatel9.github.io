(function() {
	
var app=angular.module('app');
// body...
var userInfoData=function(){
	return{
		restrict:'E',
		templateUrl:"userInfoData.html",
		scope:{user:"="},
		conrtoller:function($scope){
			$scope.collapsed=false;
			$scope.collapse=function(){
				$scope.collapsed=!$scope.collapsed;
			}
		}
	}
};



app.directive('userInfoData',userInfoData);
	
})();