(function(){
	//Services...
	var module = angular.module("common.services");
	var productResource = function($resource){
		
		

		return $resource("api/products");
		
	};




module.factory("productResource",["$resource",productResource]);
}());