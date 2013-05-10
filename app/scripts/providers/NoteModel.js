(function () {
	'use strict';

	angular.module('inotesApp', [])
		/**
		 * Register the provider for the NoteModel
		 */
		.provider('NoteModel', function () {
			this.endpoint = undefined;
			this.setEnpoint = function (newEndpoint) {
				this.endpoint = newEndpoint;
			};
			this.$get = function () {
				var
					endpoint = this.endpoint,
					refreshConnection = function () {
						//reconnect to endpoint
					};
				return {
					getNoteList: function () {
						refreshConnection();
					},
					getNote: function () {
						refreshConnection();
					},
					saveNote: function () {
						refreshConnection();
					},
					deleteNote: function () {
						refreshConnection();
					}
				};
			};
		});
}());
