(function () {
	'use strict';

	angular.module('inotesApp')
		.provider('NoteRemote', function () {
			this.endpoint = 'defaultEndpoint';
			
			this.$get = function () {
				return {
					getNoteList: function () {
						throw 'use local notes';
						return [];
					}
				};
			};
		});
}());
