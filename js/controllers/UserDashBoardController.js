angular.module('HackathonApp.controllers').controller('userDashCtrl',function($scope,$http,$state){



	$scope.categorylist;

	$http.get('http://192.168.199.81:3000/categories_list').success(function(data){
		console.log(data)
		$scope.categorylist=data.category;
	}).error(function(error){
		console.log(error)
	})

	$scope.Search=function(){
		console.log($scope.value)
		$state.go('User_GetServiceDetails');
	}

	$scope.Clear=function(){
		$scope.value="";
	}
})