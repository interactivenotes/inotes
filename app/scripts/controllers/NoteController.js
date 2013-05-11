(function () {
	'use strict';

	angular.module('inotesApp')
		.controller('NoteController', function ($scope, $location, $routeParams, NoteProvider, NotesDirtyService) {

			if ($routeParams.noteId === '') {
				$location.path('/');
			}


			// var noteId = $routeParams.noteId,
			// currentNote = NoteProvider.getNote(noteId);



			NotesDirtyService.addNoteId($routeParams.noteId);

			console.info('Dirty notes:')
			console.info(NotesDirtyService.getNoteIds());

		});
}());
