(function(){
	//Services...
	var module = angular.module("app");
	var userListState = function($http){

		

		return{
			selectedUser:null
		};
	};




module.factory("userListState",userListState);
}());