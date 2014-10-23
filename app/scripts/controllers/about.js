'use strict';

/**
 * @ngdoc function
 * @name advmPrototypeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the advmPrototypeApp
 */
angular.module('advmPrototypeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
