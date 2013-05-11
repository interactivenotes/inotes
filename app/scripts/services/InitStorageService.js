'use strict';

angular.module('inotesApp')
  .factory('InitStorageService', ['Note', 'NoteRemote', function (Note, NoteRemote) {

    return {
		init: function () {
				// localStorage.clear();
			var notes = [],
				noteKeys = [];

			try{
				//Fetch all notes from remote and store locally
				notes = NoteRemote.getNoteList();
				
				//Delete locally stored notes
				localStorage.clear();

				for(var note in notes){
					Note.saveNote(note, 'local');
					noteKeys.push(notes[note].id);
				}
				
				Note.saveNoteKeys(noteKeys);
				
			}catch (e) {
			
			}

		}
    };
  }]);
