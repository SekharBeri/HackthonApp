angular.module('HackathonApp').config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('startPage',{
		url:'/user_dash',
		templateUrl:'templates/UserDashboard.html',
		controller:'userDashCtrl'
	})
	.state('adminLogin',{
		url:'/admin_login',
		templateUrl:'templates/Admin_Login.html'
	})
	.state('adminAddService',{
		url:'/admin_add_services',
		templateUrl:'templates/Admin_AddService.html',
		controller:'adminServiceCtrl'
	})
	.state('adminAddService.categories',{
		url:'/categories',
		templateUrl:'templates/categories.html',
		controller: "CategoriesController"
	})
	.state('adminAddService.newCategory',{
		url:'/new_category',
		templateUrl:'templates/new_category.html'
	})
	.state('adminAddService.admin_depart',{
		url:'/department',
		templateUrl:'templates/Department.html',
		controller:'deptCtrl'
	})
	.state('User_GetServiceDetails',{
		url:'/user_serviceview',
		templateUrl:'templates/User_ServiceDetails.html'
	})
	.state('adminAddService.admin_services',{
		url:'/services',
		templateUrl:'templates/admin_service_details.html'
	})
  .state('adminAddService.newService',{
		url:'/new_service',
		templateUrl:'templates/new_service.html'
	})
	$urlRouterProvider.otherwise('/user_dash');


})
