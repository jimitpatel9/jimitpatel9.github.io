(function() {
	
var app=angular.module('app');
// body...
var address=function($scope){
	$scope.user={
		name:"Jimit Patel",
		address:{
			street:"83 Jefferson Ave",
			city:"Jersey City",
			planet:"Earth"
		}
	};
};



app.controller('address',address);
	
})();