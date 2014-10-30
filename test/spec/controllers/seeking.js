'use strict';

describe('Controller: SeekingCtrl', function () {

  // load the controller's module
  beforeEach(module('advmPrototypeApp'));

  var SeekingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeekingCtrl = $controller('SeekingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
