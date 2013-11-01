(function (window) {
	'use strict';

	var angular = window.angular;

	angular.module('inotesApp')
		.factory('NoteSaveRemoteService', function (Note) {

			var intervalLength = 10000;

			return {
				startInterval: function () {

					window.setInterval(function () {
						Note.saveDirtyNotes();
					}, intervalLength);

				}
			};
		});
}(this));




