'use strict';

describe('Service: InitStorageService', function () {

  // load the service's module
  beforeEach(module('inotesApp'));

  // instantiate service
  var InitStorageService;
  beforeEach(inject(function (_InitStorageService_) {
    InitStorageService = _InitStorageService_;
  }));

  it('should do something', function () {
    expect(!!InitStorageService).toBe(true);
  });

});
