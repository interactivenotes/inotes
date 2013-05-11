'use strict';

angular.module('inotesApp')
  .controller('NoteController', function ($scope, $location, $routeParams, NoteProvider, NotesDirtyProvider) {

	  if($routeParams.noteId === ''){
		  $location.path('/');
	  }


	  // var noteId = $routeParams.noteId,
	  // currentNote = NoteProvider.getNote(noteId);



	  NotesDirtyProvider.addNoteId($routeParams.noteId);

	  console.info('Dirty notes:')
	  console.info(NotesDirtyProvider.getNoteIds());

  });
