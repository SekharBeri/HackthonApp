angular.module('HackathonApp.controllers').controller('UserServiceCtrl',function($scope,$http,$stateParams,$state,$rootScope){
	// $http.get('http://192.168.199.81:3000/categories_list')
	// .success(function(data){
	// 	console.log(data.service)
	// 	$scope.service_type=data.service_level;
	// }).error(function(error){
	// 	console.log(error)
	// })
$scope.selectedDist={};
$scope.selectedState={};

$http.get('http://192.168.199.156:3000/services/'+$stateParams.id+'.json')
.success(function(data){
	console.log(data)
	$scope.serviceData=data;
	console.log($scope.serviceData.service.name)
	$scope.service_type=data.service_level;
}).error(function(error){
	console.log(error)
})


$http.get('http://192.168.199.156:3000/categories/state_data')
.success(function(data){
	console.log(data)
	$scope.states=data.states;
}).error(function(error){
	console.log(error)
})


$http.get('http://192.168.199.156:3000/categories/district_data')
.success(function(data){
	console.log(data)
	$scope.districts_data=data.districts;
}).error(function(error){
	console.log(error)
})



$scope.search=function(){
	console.log($scope.selectedDist)
	console.log($scope.selectedState)
}




$scope.open = function (link){
	$rootScope.link=link;
	$state.go('service_details')
}


})