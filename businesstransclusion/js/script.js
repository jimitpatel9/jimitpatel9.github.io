angular.module('app',[]);

angular.module('app').controller('mainCtrl',function($scope) {
	// body...
	$scope.baseLocation="jimit";
});
angular.module('app').directive('myQuestion',function(){
	return{
		restrict:'E',
		transclude:true,
		templateUrl:'myQuestion.html',
		scope:{
			questionText:'@q'
		}
	}
});


