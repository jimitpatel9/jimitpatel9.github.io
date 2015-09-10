"use strict";
(function() {
	
var app=angular.module('psFramework');
// body...
var psFramework=function(){
	return{
		restrict:'E',
		templateUrl:"ext-modules/psFramework/psFrameworkTemplate.html",
		controller:"psFrameworkCtrl",
		transclude:true,
		scope:{
			title:'@',
			subtitle:'@',
			iconFile:'@'
		}
	}
};



app.directive('psFramework',psFramework);
	
})();