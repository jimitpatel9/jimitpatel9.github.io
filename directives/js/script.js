angular.module('app',[]);

angular.module('app').controller('mainCtrl',function($scope) {
	// body...
	$scope.user1 = { 
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
	$scope.user2 = { 
		name:"Jim Patel",
		address :{
			street:"84 Jefferson Ave",
			city:"Jersey City",
			Planet: "Earth"
		},
		friends:[
		'Raul',
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
		scope:{
			user : "="
		}
		controller:function($scope){
			$scope.knightMe=function(user){
				user.rank="knight";
			}
		}
	};
});