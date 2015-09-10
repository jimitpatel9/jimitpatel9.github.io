"use strict";
(function() {
	
var app=angular.module('psFramework');
// body...
var psFrameworkCtrl=function($scope){
	$scope.$on('ps-menu-item-selected-event',function(evt,data){
		$scope.routeString=data.route;
	})
};



app.controller('psFrameworkCtrl',["$scope",psFrameworkCtrl]);
	
})();