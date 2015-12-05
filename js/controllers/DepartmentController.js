angular.module('HackathonApp.controllers').controller('deptCtrl',function($scope,$http){
	$http.get('http://192.168.199.81:3000/categories_list').success(function(data){
		console.log(data)
		$scope.depts=data.category;
	}).error(function(error){
		console.log(error)
	})

	$scope.submitDeptData=function(){
		if($scope.myDept!=undefined||$scope.myDept!=null)
		{
			console.log($scope.myDept)
		}
	}

})