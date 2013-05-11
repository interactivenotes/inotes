'use strict';

angular.module('inotesApp')
  .controller('NoteController', function ($scope, $location, $routeParams, NoteProvider, NotesDirty) {

	  if($routeParams.noteId === ''){
		  $location.path('/');
	  }


	  // var noteId = $routeParams.noteId,
	  // currentNote = NoteProvider.getNote(noteId);
	  
	  

	  NotesDirty.addNoteId($routeParams.noteId);
	  
	  console.info('Dirty notes:')
	  console.info(NotesDirty.getNoteIds());

  });
