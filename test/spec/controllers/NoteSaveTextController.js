'use strict';

describe('Controller: NoteSaveTextControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('inotesApp'));

  var NoteSaveTextControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoteSaveTextControllerCtrl = $controller('NoteSaveTextControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
