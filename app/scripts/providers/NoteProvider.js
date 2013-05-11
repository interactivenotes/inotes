(function () {
	'use strict';

	angular.module('inotesApp')
		.provider('NoteProvider', function () {


			// localStorage.getItem();
			// localStorage.setItem();

			//Delete locally stored notes
			localStorage.clear();

			//Fetch all notes from remote and store locally

			//Build noteKeys (from server list)

			this.noteKeys = localStorage.getItem('noteKeys');


			this.$get = function () {
				return {
					getNoteList: function () {
						var
							ret = [];
						for (noteKey in this.noteKeys) {
							ret.push(JSON.parse(localStorage.getItem(noteKey)));
						}
						return ret;

					},
					getNote: function (noteKey) {
						return JSON.parse(localStorage.getItem(noteKey));
					},
					saveNote: function (note, mode) {
						mode = mode || 'local';

						//Remote notes are *always' stored remotely and locally
						//so there's no break!!!
						switch (mode) {
							case 'remote':
								NoteRemoteProvider.saveNote(note);
							case 'local':
							default:
								localStorage.setItem(note.id, JSON.stringify(note));
						}
					},
					deleteNote: function (noteKey, mode) {
						mode = mode || 'local';

						//Remote notes are *always* deleted remotely and locally
						//so there's no break!!!
						switch (mode) {
							case 'remote':
								NoteRemoteProvider.deleteNote(noteKey);
							case 'local':
							default:
								localStorage.removeItem(noteKey);
						}

					},
					saveDirtyNotes: function(){

					}
				};
			};
		});
}());
