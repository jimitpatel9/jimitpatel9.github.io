(function() {
	
var app=angular.module('app');
// body...
var mainCtrl=function($scope){
	$scope.bountyhunters=[{
			name:'Boba Fett',
			age:20
		},
		{
			name:'Ram Babu',
			age:120
		},
		{
			name:'Rohan Lal',
			age:50
		},
		{
			name:'Micky Mouse',
			age:40
		}]
	$scope.add=function(){
		$scope.bountyhunters.push({name:'4LOM'});
	}
	$scope.remove=function(){
		$scope.bountyhunters.length--;
	}
};



app.controller('mainCtrl',mainCtrl);
	
})();