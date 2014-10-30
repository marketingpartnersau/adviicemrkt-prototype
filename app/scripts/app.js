'use strict';

/**
 * @ngdoc overview
 * @name advmPrototypeApp
 * @description
 * # advmPrototypeApp
 *
 * Main module of the application.
 */
angular
  .module('advmPrototypeApp', [
    'ui.router',
    'mm.foundation'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  })

  .run(function ($rootScope, $state){
    $rootScope.$state = $state;
  });
