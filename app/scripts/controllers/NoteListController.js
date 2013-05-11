(function () {
	'use strict';

angular.module('inotesApp')
  .controller('NoteListController', function ($scope, Note, NoteRemote, InitStorageService) {
	  //Initialize storage
	  InitStorageService.init();
	  
	  $scope.noteList = Note.getNoteList();
	  
  });

}());

