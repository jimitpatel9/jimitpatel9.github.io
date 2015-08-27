(function() {
	
var app=angular.module('app');
// body...
var userInfoCard=function(){
	return{
		templateUrl:"userInfoCard.html",
		restrict:"E",
		scope:{
			user : "="
		},
		controller:function($scope){
			$scope.collapsed=true;
			$scope.knightMe=function(user){
				user.rank="knight";
			}
			$scope.collapse=function(){
				$scope.collapsed=!$scope.collapsed;
			}
			$scope.removeFriend=function(friend){
				var idx=$scope.user.friend.indexOf(friend);
				if (idx>-1) {
					$scope.user.friend.splice(idx,1);
				};
			}
			$scope.nextState=function(){
				$scope.user.level++;
				$scope.user.level=$scope.user.level % 4;	
			}
		}
	}
};



app.directive('userInfoCard',userInfoCard);
	
})();