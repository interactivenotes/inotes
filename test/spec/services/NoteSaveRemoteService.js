'use strict';

describe('Service: NoteSaveRemoteService', function () {

  // load the service's module
  beforeEach(module('inotesApp'));

  // instantiate service
  var NoteSaveRemoteService;
  beforeEach(inject(function (_NoteSaveRemoteService_) {
    NoteSaveRemoteService = _NoteSaveRemoteService_;
  }));

  it('should do something', function () {
    expect(!!NoteSaveRemoteService).toBe(true);
  });

});
