'use strict';

angular.module('inotesApp')
  .factory('NotesDirty', function () {

    var dirtyNotes = [];

    // Public API here
    return {
      addNoteId: function (noteId) {
		  var alreadyExistent = false;
          for(var i=0;i<dirtyNotes.length;i++){
          	if (dirtyNotes[i] === noteId) {
          		alreadyExistent = true;
  				break;
          	};
          };
		  
		  if(alreadyExistent === false){
			  dirtyNotes.push(noteId);		  	
		  }
      },
      removeNoteId: function (noteId) {
        for(var i=0;i<dirtyNotes.length;i++){
        	if (dirtyNotes[i] === noteId) {
        		dirtyNotes.splice(i, 1);
				break;
        	};
        };
      },
      getNoteIds: function () {
        return dirtyNotes;
      }
    };
  });
