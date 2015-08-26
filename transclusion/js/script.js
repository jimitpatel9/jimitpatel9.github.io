angular.module('app',[]);

angular.module('app').controller('mainCtrl',function($scope) {
	// body...
	$scope.message="This Is message";
	console.log('controller',$scope);
});
angular.module('app').controller('innerCtrl',function(){
 console.log('innerCtrl',$scope);
});
angular.module('app').directive('displayBox',function(){
	return{
		restrict:'E',
		templateUrl:"displayBox.html",
		controller:function($scope){
			$scope.hidden =false;
			$scope.close=function(){
				$scope.hidden=true;
			}
			$scope.message="I'm Hijacking";
			console.log('directive',$scope);
		},
		transclude:true,
		scope:true
		}
});

