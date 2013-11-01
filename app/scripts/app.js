(function (window) {
	'use strict';
	var angular = window.angular;

	angular.module('inotesApp', [])
		.config(function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'views/TimelineView.html',
					controller: 'InitController'
				})
				.when('/notes', {
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
					redirectTo: '/notes'
				});
		});
}(this));
