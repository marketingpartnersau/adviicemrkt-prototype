'use strict';

/**
 * @ngdoc function
 * @name advmPrototypeApp.controller:SeekingCtrl
 * @description
 * # SeekingCtrl
 * Controller of the advmPrototypeApp
 */
angular.module('advmPrototypeApp')
  .controller('SeekingCtrl', function ($scope) {
    $scope.states = {
    	registered: false,
    	signedIn: false
    }
  });
