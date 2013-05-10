'use strict';

angular.module('inotesApp')
  .controller('NoteController', function ($scope, $routeParams, NotesDirty) {

	  NotesDirty.addNoteId($routeParams.noteId);

  });
