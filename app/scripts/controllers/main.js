'use strict';

/**
 * @ngdoc function
 * @name advmPrototypeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the advmPrototypeApp
 */
angular.module('advmPrototypeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
