angular.module('HackathonApp.controllers')
  .controller('ServiceController',['$scope', '$http', '$state', function($scope, $http, $state){
    
    $http({method: 'GET',
      url: "http://192.168.199.81:3000/services_list"
    }).success(function(data){
     $scope.services =  data["services"];
   })
    .error(function(error){
      alert(error+"sdf");
    });
    
}]);
