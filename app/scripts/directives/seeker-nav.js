'use strict';

/**
 * @ngdoc directive
 * @name advmPrototypeApp.directive:seekerNav
 * @description
 * # seekerNav
 */
angular.module('advmPrototypeApp')
  .directive('seekerNav', function () {
    return {
      templateUrl: 'views/directives/seeker-nav.html',
      restrict: 'E',
      link: function postLink() {
        
      }
    };
  });
