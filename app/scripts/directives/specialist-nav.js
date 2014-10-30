'use strict';

/**
 * @ngdoc directive
 * @name advmPrototypeApp.directive:specalistNav
 * @description
 * # specalistNav
 */
angular.module('advmPrototypeApp')
  .directive('specialistNav', function () {
    return {
      templateUrl: 'views/directives/specialist-nav.html',
      restrict: 'E',
      link: function postLink() {
        
      }
    };
  });
