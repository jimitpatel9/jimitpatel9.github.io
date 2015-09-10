"use strict";
(function() {
	
var app=angular.module('psMenu');
// body...
var psMenu=function(){
	return{
		restrict:'E',
		templateUrl:"ext-modules/psMenu/psMenuTemplate.html",
		controller:"psMenuCtrl",
		transclude:true,
		scope:{

		},
		link:function(scope,el,attr){

		}
	}
};



app.directive('psMenu',psMenu);
	
})();