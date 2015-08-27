	// Code goes here
	(function(){
var module = angular.module("githubViewer");
	
	var userCtrl=function($scope,github,$routeParams){

		var onUserComplete=function(data){
			$scope.user = data;
			github.getRepos($scope.user)
			.then(onRepos,onError);
		};

		var onRepos=function(data){
			$scope.repos=data;
		};

		var onError= function(reason){
		$scope.error="could not fetch the data";
		};

		$scope.repoSortOrder="-stargzers_count";
		$scope.username = $routeParams.username;
		github.getUser($scope.username).then(onUserComplete,onError);
	};
	module.controller("userCtrl",userCtrl);
	}());