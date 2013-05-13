'use strict';

angular.module('inotesApp')
  .factory('NoteSaveRemoteService', function (Note) {

	  var intervalLength = 10000;

    return {
      startInterval: function () {
        
		  setInterval(function() {
			  Note.saveDirtyNotes();
		  }, intervalLength);
	  
      }
    };
  });
