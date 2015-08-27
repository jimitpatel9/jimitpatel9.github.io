angular.module('app',[]);

angular.module('app').controller('mainCtrl',function($scope) {
	// body...
	$scope.items=[1,3,6,7];
});
angular.module('app').directive('myTransclude',function(){
	return{
		restrict:'E',
		trasclude:true,
		template:'<div ng-transclude />'
		
	}
});

