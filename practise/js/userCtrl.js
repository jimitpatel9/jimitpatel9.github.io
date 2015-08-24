	// Code goes here
	(function(){

	
	var MainCtrl=function($scope,$http,$interval,$log,$anchorScroll,$location){

		var onUserComplete=function(data){
			$scope.user = data;
			github.getRepos($scope.user)
			.then(onRepos,onError);
		};

		var onRepos=function(data){
			$scope.repos=data;
			$location.hash("userDetails");
			$anchorScroll();
		};

		var onError= function(reason){
		$scope.error="could not fetch the data";
		};

		$scope.search=function(username){
			$log.info("Search for " + username);
			github.getUser(username).then(onUserComplete , onError);
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