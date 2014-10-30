'use strict';

/**
 * @ngdoc service
 * @name advmPrototypeApp.requests
 * @description
 * # requests
 * Factory in the advmPrototypeApp.
 */
angular.module('advmPrototypeApp')
  .factory('requests', function () {
    // Service logic
    // ...

    // var meaningOfLife = 42;

    // Public API here
    return {
      requests: [
        {
          name: 'John Doe',
          title: 'I want to sell my house'
        },
        {
          name: 'Jane King',
          title: 'I want to buy a farm'
        },
        {
          name: 'Hugh Jass',
          title: 'I need a 10 year budget plan'
        },
        {
          name: 'Ivana Humpalot',
          title: 'I need to start a business'
        },
        {
          name: 'Amanda Hugankis',
          title: 'I want to liquidate my assets'
        },
      ]
    };
  });
