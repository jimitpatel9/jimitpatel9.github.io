"use strict";
(function() {
	
var app=angular.module('psMenu');
// body...
var psMenuItem=function(){
	return{
		restrict:'E',
		require:'^psMenu',
		scope:{
			label:'@',
			icon:'@',
			route:'@'
		},
		templateUrl:"ext-modules/psMenu/psMenuItemTemplate.html",
		link:function(scope,el,attr,ctrl){
			scope.err=true;
			scope.isActive=function(){
				return el===ctrl.getActiveElement();
			};
			el.on('click',function(evt){
				evt.stopPropagation();
				evt.preventDefault();
				scope.$apply(function(){
					ctrl.setActiveElement(el);
					ctrl.setRoute(scope.route);
					console.log('Item Menu', scope.err)
				});
			})
		}
	}
};



app.directive('psMenuItem',psMenuItem);
	
})();