'use strict';

/**
 * @ngdoc directive
 * @name advmPrototypeApp.directive:specialistMenu
 * @description
 * # specialistMenu
 */
angular.module('advmPrototypeApp')
  .directive('specialistMenu', function () {
    return {
      templateUrl: 'views/directives/specialist-menu.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the specialistMenu directive');
      }
    };
  });
