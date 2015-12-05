angular.module('HackathonApp.controllers').controller('UserServiceCtrl',function($scope,$http,$stateParams){
	$http.get('http://192.168.199.81:3000/categories_list')
	.success(function(data){
		$scope.categories=data.category;
		// console.log(data)
	}).error(function(error){
		console.log(error)
	})

	$http.get('http://192.168.199.81:3000/services/'+$stateParams.id)
	.success(function(data){
		$scope.servicesData=data;
		$scope.selectedTerm=data.service.name;
		$scope.categories=data.categories;
	}).error(function(error){
		console.log(error)
	})


	$scope.changed=function(){
		// console.log($scope.selectedCategory)
		// console.log($scope.selectedDept)
		if($scope.selectedCategory!=undefined)
		{
			console.log($scope.selectedCategory)
			console.log($scope.selectedTerm)
		}
	}

})