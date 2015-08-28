(function() {
	
var app=angular.module('app');
// body...
var modal=function($document){
	return{
		restrict:'E',
		scope:{
			modalOpen:'=open',
			options:'=',
			onClose:'&'
		},
		transclude:true,
		templateUrl:'modal.html',
		controller:function($scope){
			$scope.close=function(){
				$scope.modalOpen=false;
				console.log('hello');
				$scope.onClose();
			}
		},
		link:function(scope,el,attrs){
			var options=angular.extend({
				height:'250px',
				width:'500px',
				top:'20%',
				left:'30%'
			},scope.options);
			el.find('.modal-container').css({
				'left':options.left,
				'top':options.top,
				'height':options.height + 'px',
				'width': options.width + 'px'
			})
			var pageHeight = $document.height();
			var pageWidth = $document.width();
			el.find('.modal-blackout').css({
				'width':pageWidth +'px',
				'height':pageHeight + 'px'
			})
		}
	}
};



app.directive('modal',modal);
	
})();