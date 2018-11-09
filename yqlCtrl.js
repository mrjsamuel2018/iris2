'use strict';
angular
    .module('myApp')
    .controller('yqlCtrl', ['$scope', function ($scope){
      $scope.title = 'YQL Data for the query: "show tables"';
    }]);