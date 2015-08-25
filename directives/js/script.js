angular.module('app',[]);

angular.module('app').controller('mainCtrl',function($scope) {
	// body...
	$scope.user1 = { 
		name:"Jimit Patel",
		address :{
			street:"83 Jefferson Ave",
			city:"Jersey City",
			planet: "Earth"
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
			planet: "Earth"
		},
		friends:[
		'Raul',
		'Rinay',
		'Ram'
		]

	};
	
});
angular.module('app').directive('address',function() {
return{
	templateUrl:"address.html",
	restrict:"E",
	scope:true,
		controller:function($scope){
		$scope.collapsed=false;
		$scope.collapseAddress=function(){
			$scope.collapsed=true;
		}
		$scope.expandAddress=function(){
			$scope.collapsed=false;
		}
	}
}

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
			$scope.removeFriend=function(friend){
				var idx=$scope.user.friend.indexOf(friend);
				if (idx>-1) {
					$scope.user.friend.splice(idx,1);
				};
			}
		}
	};
});
angular.module('app').directive('removeFriend',function(){
	return{
		restrict:"E",
		templateUrl:"removeFriend.html",
		scope:{
			notifyParent:"&method"
		},
		controller:function($scope){
			$scope.removing=false;
			$scope.startRemove=function(){
				$scope.removing=true;
			}
			$scope.confirmRemove=function(){
				$scope.notifyParent();
			}
		}
	}
});
