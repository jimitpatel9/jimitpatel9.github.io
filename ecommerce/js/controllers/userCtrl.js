(function() {
	
var app=angular.module('app');
// body...
var userCtrl=function($scope,$routeParams){
	$scope.username=$routeParams.username;
	console.log('userCtrl',$scope);
	$scope.itemList=[{
		name:'Pen',
		price:'$4.00',
		img:'images/item/pen.jpg'
	},
	{
		name:'Pencil',
		price:'$3.00',
		img:'images/item/pencil.jpg'
	}]
};



app.controller('userCtrl',userCtrl);
	
})();