'use strict';

describe('Directive: seekerNav', function () {

  // load the directive's module
  beforeEach(module('advmPrototypeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<seeker-nav></seeker-nav>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the seekerNav directive');
  }));
});
