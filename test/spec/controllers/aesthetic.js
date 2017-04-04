'use strict';

describe('Controller: AestheticCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var AestheticCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AestheticCtrl = $controller('AestheticCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AestheticCtrl.awesomeThings.length).toBe(3);
  });
});
