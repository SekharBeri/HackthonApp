angular.module('HackathonApp.controllers')
  .controller('CategoriesController',['$scope', '$http', '$state', function($scope, $http, $state){
    
    $http({method: 'GET',
      url: "http://192.168.199.81:3000/categories_list"
    }).success(function(data){
       $scope.categories =  data["category"];
    })
    .error(function(error){
    alert(error+"sdf");
    });
    
    $scope.createCategory = function(){
      category = { name: $scope.categoryName };
      $http({method: 'POST',
        url: "http://192.168.199.81:3000/categories/create_category",
        data: category
      }).success(function(response){
        if(response){
          $state.go('adminAddService.categories');
        }
      })
      .error(function(error){
        alert(error+"sdf");
      });
    };
    
  }]);

