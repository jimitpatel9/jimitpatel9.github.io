angular.module('app',[]);

angular.module('app').controller('mainCtrl',function($scope) {
	// body...
	$scope.user1={
		name:'Jimit'
	}
});
angular.module('app').directive('userTile',function(){
	return{
		restrict:"E",
		scope:{
			user:"="
		},
		templateUrl:"userTile.html"
		
	}
});

