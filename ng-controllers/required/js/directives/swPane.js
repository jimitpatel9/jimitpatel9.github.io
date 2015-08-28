(function() {
	
var app=angular.module('app');
// body...
var swPane=function(){
	return{
		restrict:'E',
		transclude:true,
		scope:{
			title:'@'
		},
		require:'^swTabstrip',
		link:function(scope,el,attrs,tabstripCtrl){
			tabstripCtrl.addPane(scope);
		},
		controller:function($scope){
			
		},
		templateUrl:'swPane.html'
		
	}
};



app.directive('swPane',swPane);
	
})();