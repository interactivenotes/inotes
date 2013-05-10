'use strict';

angular.module('inotesApp')
  .controller('NoteController', function ($scope, $location, $routeParams, NotesDirty) {

	  if($routeParams.noteId === ''){
		  $location.path('/');
	  }

	  NotesDirty.addNoteId($routeParams.noteId);
	  
	  console.info('Dirty notes:')
	  console.info(NotesDirty.getNoteIds());

  });
