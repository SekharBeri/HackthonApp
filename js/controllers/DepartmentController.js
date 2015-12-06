angular.module('HackathonApp.controllers').controller('deptCtrl',function($scope,$http){
	$http.get('http://192.168.199.156:3000/categories_list').success(function(data){
		console.log(data)
		$scope.depts=data.category;
	}).error(function(error){
		console.log(error)
	})

	$scope.createDept=function(){
		if($scope.myDept!=undefined||$scope.myDept!=null)
		{
			console.log($scope.myDept)
			console.log($scope.service)
		}
	}

})