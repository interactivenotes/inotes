(function () {
	'use strict';

	angular.module('inotesApp')
		.controller('NoteController', function ($scope, $location, $routeParams, Note) {

			$scope.note = null;

			if ($routeParams.noteId !== '') {
				$scope.note = Note.getNote($routeParams.noteId); 
				if($scope.note === null){
					console.log('Note not found using id ' + $routeParams.noteId);
					$location.path('/');
					return false;
				}
			}

			if($scope.note === null){
				$scope.note = Note.createNote();
				console.log('created note ' + $scope.note.id);
			}

			$scope.saveNote = function() {				
			    Note.saveNote($scope.note, 'local');
				console.log('Saved note with id ' + $scope.note.id);
			}
			
			$scope.deleteNote = function() {
				var confirmDelete = confirm('Do you really want to delete this note?');
				if (confirmDelete === true) {
					Note.deleteNote($scope.note.id, 'local');	
					$location.path('/');
				};
			}
		});
}());
