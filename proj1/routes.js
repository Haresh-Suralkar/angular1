proj1.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('');
      $routeProvider
        .when("/login", {templateUrl:"Views/login/login.html", controller:"LoginController" })
      	.when("/dashboard", {templateUrl:"Views/dashboard/dashboard.html", controller:"DashboardController" })
      	.otherwise({
      		redirectTo: "/login"
      	})
    }
  ]);