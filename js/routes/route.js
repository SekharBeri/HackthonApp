angular.module('HackathonApp').config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('startPage',{
		url:'/user_dash',
		templateUrl:'templates/UserDashboard.html'
	})
	.state('adminLogin',{
		url:'/admin_login',
		templateUrl:'templates/Admin_Login.html'
	})
	.state('adminAddService',{
		url:'/admin_add_services',
		templateUrl:'templates/Admin_AddService.html'
	})

	$urlRouterProvider.otherwise('/user_dash');


})