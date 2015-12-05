angular.module('HackathonApp').config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'templates/UserDashboard.html'
	})
	.otherwise({redirectTo:'/'})
})