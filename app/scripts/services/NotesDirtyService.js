(function (window) {
	'use strict';
	var angular = window.angular;

	angular.module('inotesApp')
		.factory('NotesDirtyService', function () {

			var dirtyNotes = [];

			// Public API here
			return {
				addNoteId: function (noteId) {
					var
						alreadyExistent = false,
						i;
					for (i = 0; i < dirtyNotes.length; i += 1) {
						if (dirtyNotes[i] === noteId) {
							alreadyExistent = true;
							break;
						}
					}

					if (alreadyExistent === false) {
						dirtyNotes.push(noteId);
					}
				},
				removeNoteId: function (noteId) {
					var i;
					for (i = 0; i < dirtyNotes.length; i += 1) {
						if (dirtyNotes[i] === noteId) {
							dirtyNotes.splice(i, 1);
							break;
						}
					}
				},
				getNoteIds: function () {
					return dirtyNotes;
				}
			};
		});
}(this));
