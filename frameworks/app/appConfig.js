angular.module('app').config(function($provide){
	$provide.decorator("$execptionHandler",["$delegate",function($delegate){
		return function(execption,cause){
			$delegate(execption,cause);
			//alert(execption.message);
		};
	}]);
});