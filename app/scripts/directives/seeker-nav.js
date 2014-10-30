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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the seekerNav directive');
      }
    };
  });
