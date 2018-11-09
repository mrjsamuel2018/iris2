'use strict';
angular
    .module('myApp')
    .controller('homeCtrl', ['$scope', function ($scope){        
      $scope.title = 'Welcome to the demo page.';
    }]);