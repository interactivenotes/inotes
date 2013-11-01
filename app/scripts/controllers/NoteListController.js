(function (window) {
	'use strict';
	var angular = window.angular;

	angular.module('inotesApp')
		.controller('NoteListController', function ($scope, Note) {

			var notes = Note.getNoteList(),
				noteGroups = [],
				currEl = {},
				i;
			for (i = 0; i < notes.length; i += 1) {
				if (i === 0 || i % 5 === 0) {
					currEl = {
						bigNote: {
							note: notes[i],
							classIndex: i
						},
						smallNotes: []
					};
					noteGroups.push(currEl);
				} else {
					currEl.smallNotes.push({
						note: notes[i],
						classIndex: i
					});
				}
			}
			$scope.noteGroups = noteGroups;
			$scope.test = function () {
				return true;
			};
		});

}(this));
