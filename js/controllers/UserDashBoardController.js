angular.module('HackathonApp.controllers').controller('userDashCtrl',function($scope,$http,$state){

	$scope.categorylist;
	$scope.serviceslist;

	$scope.getData=function(){
		//alert($scope.value);
		var obj ={term:$scope.value}
		$http({method: 'GET', 
			url: 'http://192.168.199.156:3000/search_services',
			params: obj}).success(function(data){
				//console.log(data[0].label)
				$scope.categorylist=data;
			}).error(function(error){
				console.log(error)
			})
		}

		$scope.Search=function(){
			console.log($scope.value);
			$state.go('User_GetServiceDetails',{id:$scope.value.id});
		}

		$scope.Clear=function(){
			$scope.value="";
		}
	})