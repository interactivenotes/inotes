'use strict';

angular.module('inotesApp')
  .controller('NoteListController', function ($scope, NoteProvider) {
	  $scope.notes = NoteProvider.getNoteList();
  });
