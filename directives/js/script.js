angular.module('app',[]);

angular.module('app').controller('mainCtrl',function($scope) {
	// body...
	$scope.user = { 
		name:"Jimit Patel",
		address :{
			street:"83 Jefferson Ave",
			city:"Jersey City",
			Planet: "Earth"
		},
		friends:[
		'Rahul',
		'Rinay',
		'Ram'
		]

	};
	
});
angular.module('app').directive('userInfoCard',function() {
	// body...
	return{
		templateUrl:"userInfoCard.html",
		restrict:"E",
		controller:function($scope){
			$scope.knightMe=function(user){
				user.rank="knight";
			}
		}
	};
});