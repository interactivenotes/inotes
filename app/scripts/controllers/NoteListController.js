'use strict';

angular.module('inotesApp')
  .controller('NoteListController', function ($scope, NoteModel) {
	  $scope.notes = NoteModel.getNoteList();
  });
