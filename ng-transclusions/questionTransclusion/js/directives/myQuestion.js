(function() {
	
var app=angular.module('app');
// body...
var myQuestion=function(){
	return{
		restrict:'E',
		transclude:true,
		scope:{
			question :"@q"
		},
		templateUrl:'myQuestion.html'
	}
};



app.directive('myQuestion',myQuestion);
	
})();