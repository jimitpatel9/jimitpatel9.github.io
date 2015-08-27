(function() {
	
var app=angular.module('app');
// body...
var stateDisplay=function(){
	return{
	link:function(scope,el,attrs){
		var params=attrs['stateDisplay'].split(' ');
		var linkVar=params[0];
		scope.$watch(linkVar,function(newVal){
			el.removeClass(params.join(' '));
			el.addClass(params[newVal+1]);	
	});
}
}
};



app.directive('stateDisplay',stateDisplay);
	
})();