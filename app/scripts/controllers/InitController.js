(function (window) {
	'use strict';

	var angular = window.angular;

	angular.module('inotesApp')
		.controller('InitController', function ($scope, $location, Note, NoteSaveRemoteService) {
			//TODO Check for configuration

			$location.path('/config');

			//Initialize App
			Note.initStorage();
			NoteSaveRemoteService.startInterval();

			$location.path('/notes');
		});
}(this));


