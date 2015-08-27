(function() {
	
var app=angular.module('app');
// body...
var myLazyRender=function(){
	return{
		restrict:'A',
		transclude:'element',
		
		link:function(scope,el,attrs,ctrl,transclude){
			var hasBeenShown=false;
			var watchfn=scope.$watch(attrs.myLazyRender,function(newVal){
				if(newVal && !hasBeenShown)
				{
					hasbeenshown=true;
					transclude(scope,function(clone){
						el.after(clone);
					});
					watchfn();
				}
			});
			
			
		}
	}
};



app.directive('myLazyRender',myLazyRender);
	
})();