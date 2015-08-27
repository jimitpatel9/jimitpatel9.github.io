(function(){
var module = angular.module("githubViewer");
var repoCtrl = function($scope,$routeParams,github){
	var onRepo = function(data){
		$scope.repo=data;
	};
	var onError = function(reason){
		$scope.error="Could not fetch the data";
	};
var reponame = $routeParams.reponame;
var username = $routeParams.username;
github.getRepoDetails(username,reponame)
.then(onRepo,onError);

};

module.controller("repoCtrl",repoCtrl);
}());