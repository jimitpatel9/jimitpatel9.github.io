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
		},
		controller:function($scope){
			$scope.collapsed=true;
			$scope.knightMe=function(user){
				user.rank="knight";
			}
			$scope.collapse=function(){
				$scope.collapsed=!$scope.collapsed;
			}
		}
	};
});
angular.module('app').directive('userInfoCard',function() {
return{
	templateUrl:"address.html",
	restrict:"E",
	controller:function($scope){
		$scope.collapsed=false;
		$scope.collapseAddress=function(){
			$scope.collapsed=true;
		}
		$scope.cexpandAddress=function(){
			$scope.collapsed=false;
		}
	}
}

});