'use strict';

describe('Filter: TruncateFilter', function () {

  // load the filter's module
  beforeEach(module('inotesApp'));

  // initialize a new instance of the filter before each test
  var TruncateFilter;
  beforeEach(inject(function ($filter) {
    TruncateFilter = $filter('TruncateFilter');
  }));

  it('should return the input prefixed with "TruncateFilter filter:"', function () {
    var text = 'angularjs';
    expect(TruncateFilter(text)).toBe('TruncateFilter filter: ' + text);
  });

});
