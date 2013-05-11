(function () {
	'use strict';

	angular.module('inotesApp')
	.controller('NoteListController', function ($scope, Note) {
	  
		var notes = Note.getNoteList(),
		noteGroups = [],
		currEl = undefined;
		for (var i=0; i < notes.length; i++) {
			if (i%5==0) {
				if(i>0){
					noteGroups.push(currEl);
				}
				currEl = {
					bigNote: {
						note: notes[i],
						classIndex: i
					},
					smallNotes: []
				};
			}else{
				currEl.smallNotes.push({
					note: notes[i],
					classIndex: i
				})
			}
		};

		$scope.noteGroups = noteGroups;
		$scope.test = function () {
			return true;
		};
	});

}());
