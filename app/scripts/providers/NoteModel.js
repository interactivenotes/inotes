(function () {
	'use strict';

	angular.module('inotesApp')
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
						return [1,2,3,4,5];
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
