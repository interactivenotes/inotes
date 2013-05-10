'use strict';

describe('Controller: NoteControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('inotesApp'));

  var NoteControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoteControllerCtrl = $controller('NoteControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
