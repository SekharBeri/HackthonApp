angular.module('HackathonApp.controllers')
  .controller('ServiceController',['$scope','$http', '$state' ,function($scope,$http,$state){
    
    $http({method: 'GET',
      url: "http://192.168.199.81:3000/categories_list"
    }).success(function(data){
     $scope.categories =  data["category"];
   })
    .error(function(error){
      alert(error+"sdf");
    });
    
  }]);
