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
						return [{id: 1, text: "lipsum"}, {id: 2, text: "lupsim"}];
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
