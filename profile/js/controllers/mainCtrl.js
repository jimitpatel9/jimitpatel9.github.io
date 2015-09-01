(function() {
	
var app=angular.module('app');
// body...
var mainCtrl=function($scope,$location){
	$scope.tasklist=[];
	$scope.addTaskScreen=false;
	$scope.displayList=false;
	$scope.taskdata="Welcome to task manager";
	$scope.screentoaddTask=function(){
		$scope.addTaskScreen=true;
		$scope.displayList=false;
	};
	$scope.cancelTask=function(){
		$scope.addTaskScreen=false;
	};
	$scope.addTask=function(){
		$scope.displayList=true;
		$scope.addTaskScreen=false;
		$scope.tasklist.push($scope.taskdata);
	}

};



app.controller('mainCtrl',mainCtrl);
	
})();