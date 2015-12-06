angular.module('HackathonApp.controllers').controller('ServiceDetailCtrl',function($scope,$http,$state,$stateParams,$rootScope){
	console.log($rootScope.link)
	$http.get('http://192.168.199.156:3000'+$rootScope.link).success(function(data){
		console.log(data)
		$scope.serviceDetails=data;
	}).error(function(error){
		console.log(error)
	})

})