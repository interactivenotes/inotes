'use strict';

describe('Controller: NoteDeleteDrawControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('inotesApp'));

  var NoteDeleteDrawControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoteDeleteDrawControllerCtrl = $controller('NoteDeleteDrawControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
