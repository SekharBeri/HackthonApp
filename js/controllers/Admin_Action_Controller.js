angular.module('HackathonApp.controllers').controller('adminServiceCtrl',function($state,$scope){
	$state.go('adminAddService.categories');
})