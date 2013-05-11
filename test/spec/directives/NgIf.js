'use strict';

describe('Directive: NgIf', function () {
  beforeEach(module('inotesApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<-ng-if></-ng-if>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the NgIf directive');
  }));
});
