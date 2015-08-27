(function() {
	
var app=angular.module('app');
// body...
var droid=function(){
	return{
		restrict:'E',
		templateUrl:"droid.html",
		scope:{user:"="},
		
	}
};



app.directive('droid',droid);
	
})();