'use strict';

describe('Controller: NoteListControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('inotesApp'));

  var NoteListControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoteListControllerCtrl = $controller('NoteListControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
