proj1.controller('LoginController', ["$scope", function($scope){
    $scope.title ="Login"
    // $scope.total = 0;

    var v2 = this;
    v2.login = login;

    $scope.username = 'haresh';
    $scope.password = 'haresh';

    $scope.uname = 'haresh';
    $scope.pass = 'haresh';

    function login(){
    	if( $scope.username == $scope.uname 
    		&& $scope.password == $scope.pass ) {
            console.log("logged in successfully");
            
        }
    		console.log("logged in successfully 2");
    }
}])