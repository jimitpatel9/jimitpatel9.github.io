(function() {
	
var app=angular.module('app');
// body...
var myRepeat=function($compile){
	return{
		restrict:'A',
		transclude:'element',
		link:function(scope,el,attrs,ctrl,transclude){
			var pieces=attrs.myRepeat.split(' ');
			var itemString=pieces[0];
			var collectionName=pieces[2];
			var elements=[];
			scope.$watchCollection(collectionName,function(collection){
				if(elements.length>0){
					for(var i=0;i<elements.length;i++){
						elements[i].el.remove();
						elements[i].scope.$destroy();
					}
					elements=[];
				}
				for (var i = 0 ; i < collection.length; i++) {
					var childScope=scope.$new();
					childScope[itemString]=collection[i];
					transclude(childScope,function(clone){
						var template=$compile('<div class="panel panel-primary"><div class="panel-heading">{{'+itemString + '.name}}</div><div class="panel-body"></div></div>');
						var wrapper=template(childScope);
						wrapper.find(".panel-body").append(clone);
						el.before(wrapper);
						var item={};
						item.el=wrapper;
						item.scope=childScope;
						elements.push(item);
					})
				}
			});
		}
	}
};



app.directive('myRepeat',myRepeat);
	
})();