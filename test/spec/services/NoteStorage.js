'use strict';

describe('Service: NoteStorage', function () {

  // load the service's module
  beforeEach(module('inotesApp'));

  // instantiate service
  var NoteStorage;
  beforeEach(inject(function (_NoteStorage_) {
    NoteStorage = _NoteStorage_;
  }));

  it('should do something', function () {
    expect(!!NoteStorage).toBe(true);
  });

});
