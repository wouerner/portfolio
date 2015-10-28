'use strict';

/**
 * @ngdoc function
 * @name portifolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portifolioApp
 */
angular.module('portifolioApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.dados = {};

        $scope.getData = function(id){
            $http.get('dados.json').
                success(function(data, status, headers, config) {
                    console.log(data);
                    $scope.dados = data;
                });
        };

        $scope.getData();
  }]);
