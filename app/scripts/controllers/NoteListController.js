(function () {
	'use strict';

angular.module('inotesApp')
  .controller('NoteListController', function ($scope, Note) {
	  
	  //@todo move to somewhere where it's only called once!
	  Note.initStorage();
	  
	  $scope.noteList = Note.getNoteList();
	  $scope.noteCssClasses = {largeNote: '', defaultNote: ''};
  });

}());

