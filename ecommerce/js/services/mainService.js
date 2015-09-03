(function(){
	//Services...
	var module = angular.module("app");
	var userdata = function($http){
		var userdata=this;
		userdata=[{
				username:'jimit',
				password:'jimit',
				email:'jimit@jimit'
			},
			{
				username:'demo',
				password:'demo',
				email:'demo@demo'
			}
		];
		

		return{
			userdata: userdata
		};
	};




module.factory("userdata",userdata);
}());