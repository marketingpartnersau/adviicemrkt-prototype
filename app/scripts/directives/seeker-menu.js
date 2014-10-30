'use strict';

/**
 * @ngdoc directive
 * @name advmPrototypeApp.directive:seekerMenu
 * @description
 * # seekerMenu
 */
angular.module('advmPrototypeApp')
  .directive('seekerMenu', function () {
    return {
      templateUrl: 'views/directives/seeker-menu.html',
      restrict: 'E',
      link: function postLink() {

      }
    };
  });
