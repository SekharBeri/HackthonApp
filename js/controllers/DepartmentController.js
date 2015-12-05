angular.module('HackathonApp.controllers').controller('deptCtrl',function($scope){
	$scope.colors = [
	{name:'black', shade:'dark'},
	{name:'white', shade:'light', notAnOption: true},
	{name:'red', shade:'dark'},
	{name:'blue', shade:'dark', notAnOption: true},
	{name:'yellow', shade:'light', notAnOption: false}
	];

	$scope.submitDeptData=function(){
		console.log($scope.myColor)
	}

})