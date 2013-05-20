'use strict';

angular.module('inotesApp')
  .controller('InitController', function ($scope, $location, Note, NoteSaveRemoteService) {
	  //TODO Check for configuration
	  
	  if (false) {
	  	$location.path('/config');
	  }

	  //Initialize App
  	  Note.initStorage();
	  NoteSaveRemoteService.startInterval();
	  
	  $location.path('/notes');
  });
