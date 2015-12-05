angular.module('HackathonApp.controllers')
.controller('ServiceController',['$scope','$http', '$state' ,function($scope,$http,$state){

  $scope.newservice={};

  $http({method: 'GET',
    url: "http://192.168.199.81:3000/categories_list"
  }).success(function(data){
    console.log(data)
    $scope.categories =  data.category;
  })
  .error(function(error){
    alert(error+"sdf");
  });

  $scope.saveService=function(){
    console.log($scope.newservice)
    console.log($scope.newservice)
  }

}]);
