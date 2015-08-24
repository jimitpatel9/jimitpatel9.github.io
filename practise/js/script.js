	// Code goes here
	(function(){

	var app = angular.module("githubViewer",[]);
	
	var MainCtrl=function($scope,$http,$interval,$log,$anchorScroll,$location){

		var onUserComplete=function(response){
			$scope.user = response.data;
			$http.get($scope.user.repos_url)
			.then(onRepos,onError);
		};

		var onRepos=function(response){
			$scope.repos=response.data;
			$location.hash("userDetails");
			$anchorScroll();
		};

		var onError= function(reason){
		$scope.error="could not fetch the data";
		};

		$scope.search=function(username){
			$log.info("Search for " + username);
			$http.get("https://api.github.com/users/" + username)
	 	.then(onUserComplete , onError);
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
		$scope.message="Github Viewer";
		$scope.repoSortOrder="-stargzers_count";
		$scope.username="angular";
		$scope.countdown=5;
		startCountDown();
	};
	app.controller("MainCtrl",MainCtrl);
	}());