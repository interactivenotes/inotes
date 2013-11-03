(function (window) {
	'use strict';

	var angular = window.angular;

	angular.module('inotesApp')
		.controller('InitController', function ($scope, $location) {
			//TODO Check for configuration

            // $location.path('/config');

			$location.path('/notes');
		});
}(this));


