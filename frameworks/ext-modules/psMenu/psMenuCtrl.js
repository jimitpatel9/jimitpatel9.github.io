"use strict";
(function() {
	
var app=angular.module('psMenu');
// body...
var psMenuCtrl=function($scope,$rootScope){
	this.setActiveElement=function(el){
		$scope.activeElement=el;
	}
	this.getActiveElement=function(el){
		return $scope.activeElement;
	}
	this.setRoute=function(route){
		$rootScope.$broadcast('ps-menu-item-selected-event',{route:route})
	}
	console.log('Menu',$scope);
};



app.controller('psMenuCtrl',["$scope","$rootScope",psMenuCtrl]);
	
})();