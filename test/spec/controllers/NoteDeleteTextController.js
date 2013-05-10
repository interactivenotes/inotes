'use strict';

describe('Controller: NoteDeleteTextControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('inotesApp'));

  var NoteDeleteTextControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoteDeleteTextControllerCtrl = $controller('NoteDeleteTextControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
