(function (window) {
	'use strict';
	var angular = window.angular;

	angular.module('inotesApp')
		.controller('NoteSaveDrawController', function ($scope) {
			$scope.awesomeThings = [
				'HTML5 Boilerplate',
				'AngularJS',
				'Karma'
			];
		});
}(this));
