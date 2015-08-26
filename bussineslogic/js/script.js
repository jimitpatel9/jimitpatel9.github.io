angular.module('app',[]);

angular.module('app').controller('mainCtrl',function($scope) {
	// body...
	$scope.user1={
		name:'Jimit',
		selected:false
	}
});
angular.module('app').directive('userTile',function(){
	return{
		restrict:"E",
		scope:true,
		templateUrl:"userTile.html",
		controller:function($scope){
			$scope.select=function(){
				$scope.user.selected=!$scope.user.selected;
			}
		}
		
	}
});

