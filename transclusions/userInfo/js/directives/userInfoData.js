(function() {
	
var app=angular.module('app');
// body...
var userInfoData=function(){
	return{
		restrict:'E',
		templateUrl:"userInfoData.html",
		scope:{user:"="},
		
	}
};



app.directive('userInfoData',userInfoData);
	
})();