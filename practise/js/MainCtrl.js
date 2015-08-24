	// Code goes here
	(function(){

	var app = angular.module("githubViewer");
	var MainCtrl=function($scope,$interval,$location){

		$scope.search=function(username){
		 	if(countdownInterval){
		 		$interval.cancel(countdownInterval);
		 		$scope.countdown=null;
		 	}
		 };
	 	var decrementCountdown=function(){
	 		$scope.countdown -=1;
	 		if($scope.countdown<1){
	 			$scope.search($scope.username);
	 		}
	 	};
	 	var countdownInterval=null;
	 	var startCountDown = function(){
	 		countdownInterval = $interval(decrementCountdown,1000,$scope.countdown);
	 	}
		$scope.username="angular";
		$scope.countdown=5;
		startCountDown();
	};
	app.controller("MainCtrl",MainCtrl);
	}());