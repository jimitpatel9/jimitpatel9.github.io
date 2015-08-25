angular.module('app',[]);

angular.module('app').controller('mainCtrl',function($scope) {
	// body...
	$scope.messages=[];

	$scope.handlePause=function(){
		$scope.messages.push({text:'paused!'});
		console.log('paused!');
	}
	
});
angular.module('app').directive('eventPause',function(){
	return{
		restrict:"A",
		link:function(scope,el,attrs){
			vr fn=$parse(attrs['handlePause']);
			el.on('pause',function(event){
				scope.$apply(function(){
					scope.fn();
				})
			})
		}
	}
});
angular.module('app').directive('spacebarSupport',function(){
	return{
		restrict:"A",
		link:function(scope,el,attrs){
			$('body').on('keypress',function(evt){
				var videl=el[0];
				if(evt.keyCode === 32){
					if(videl.paused){
						videl.play();
					}
					else{
					videl.pause();
					}
				}
			})
		}
	}
});