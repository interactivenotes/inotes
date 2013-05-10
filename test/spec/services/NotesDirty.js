'use strict';

describe('Service: NotesDirty', function () {

  // load the service's module
  beforeEach(module('inotesApp'));

  // instantiate service
  var NotesDirty;
  beforeEach(inject(function (_NotesDirty_) {
    NotesDirty = _NotesDirty_;
  }));

  it('should do something', function () {
    expect(!!NotesDirty).toBe(true);
  });

});
