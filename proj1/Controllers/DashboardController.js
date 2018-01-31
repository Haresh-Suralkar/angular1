proj1.controller('DashboardController', ['$scope', function($scope){
	$scope.username = "Haresh";

	$scope.logout = function(){
		$route.redirectTo("/login");
	}
}]);