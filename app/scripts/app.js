(function () {
	'use strict';

	angular.module('inotesApp', [])
		.config(function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'views/TimelineView.html',
					controller: 'NoteListController'
				})
				.when('/note/:noteId', {
					templateUrl: 'views/NoteDetailView.html',
					controller: 'NoteController'
				})
				.when('/note/delete/:noteId', {
					controller: 'NoteDeleteController'
				})
				.when('/note/save/:noteId', {
					controller: 'NoteDeleteController'
				})
				.otherwise({
					redirectTo: '/'
				});
		}).run(function (Note, NoteSaveRemoteService) {
	  	  //@todo move to somewhere where it's only called once!
	  	  Note.initStorage();
		  NoteSaveRemoteService.startInterval();
		});
}());
