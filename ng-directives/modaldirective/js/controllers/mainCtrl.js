(function() {
	
var app=angular.module('app');
// body...
var mainCtrl=function($scope){
	$scope.openModal = function(){
		$scope.modalOpen=true;
	}
};



app.controller('mainCtrl',mainCtrl);
	
})();