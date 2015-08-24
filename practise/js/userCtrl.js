	// Code goes here
	(function(){

	
	var userCtrl=function($scope,github,$routeParams){

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

		$scope.repoSortOrder="-stargzers_count";
		$scope.username = $routeParams.username;
		github.getUser($scope.username).then(onUserComplete,onError);
	};
	app.controller("userCtrl",userCtrl);
	}());