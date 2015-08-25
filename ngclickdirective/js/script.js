angular.module('app',[]);

angular.module('app').controller('mainCtrl',function($scope) {
	// body...
	$scope.data={message:"I am not clicked"};
	$scope.clickHandler=function(p){
		p.message="i am clicked";
	}
});
angular.module('app').directive('myClick',function($parse){
	return{
		restrict:"A",
		link:function(scope,el,attrs){
			var fn=$parse(attrs['myClick']);
			el.on('click',function(){
				scope.$apply(function(){
					fn(scope);
				})

			})
		}
	}
		
});
