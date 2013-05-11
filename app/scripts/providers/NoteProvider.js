(function () {
	'use strict';

	angular.module('inotesApp')
		.provider('Note', function () {
			
			this.endpoint = 'http://192.168.0.87/web/app_dev.php/inotes/user/noob/';
			this.setEndpoint = function (endpoint) {
				this.endpoint = endpoint;
			}
			
			this.$get = function ($http) {
				var endpoint = this.endpoint;
				return {
					initStorage: function () {
						var notes = [],
							noteKeys = [];

						try{
							//Fetch all notes from remote and store locally
							this.getNoteListRemote();
						}catch (e) {
			
						}

					},
					getNoteKeys: function () {
						return JSON.parse(localStorage.getItem('noteKeys'));
					},
					saveNoteKeys: function (noteKeys) {
						console.log('saveNoteKeys');
						//Store TOC in local storage
						localStorage.setItem('noteKeys', JSON.stringify(noteKeys));
					},
					generateId: function () {
						var s = [],
					    	hexDigits = "0123456789abcdef";
					    for (var i = 0; i < 36; i++) {
					        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
					    }
						return s.join('');
					},
					createNote: function () {
						var id = this.generateId();
						
						return {id: id};
					},
					getNoteList: function () {
						console.log('getNoteList');
						var ret = [],
							noteKeys = this.getNoteKeys();
						for (var noteKey in noteKeys) {
							ret.push(JSON.parse(localStorage.getItem(noteKeys[noteKey])));
						}
						
						return ret;
					},
					getNoteListRemote: function () {

						$http.get(endpoint + 'list', {})
						.success(function (data, status, headers, config) {
							console.log(data);
							//Delete locally stored notes
							// localStorage.clear();
							// 
							// for(var note in notes){
							// 	this.saveNote(note, 'local');
							// 	noteKeys.push(notes[note].id);
							// }
							// 				
							// this.saveNoteKeys(noteKeys);
						})
						.error(function (data, status, headers, config) {
							console.log('Error fetching remote notes');
							throw 'Error fetching remote notes';
						});
					},
					getNote: function (noteKey) {
						return JSON.parse(localStorage.getItem(noteKey));
					},
					saveNote: function (note, mode) {
						mode = mode || 'local';

						//Remote notes are *always' stored remotely and locally
						//so there's no break!!!
						switch (mode) {
							case 'remote':
								NoteRemoteProvider.saveNote(note);
							case 'local':
							default:
								localStorage.setItem(note['id'], JSON.stringify(note));
								var noteKeys = this.getNoteKeys();
								noteKeys.push(note['id']);
								//Store TOC in local storage
								this.saveNoteKeys(noteKeys);
						}
					},
					deleteNote: function (noteKey, mode) {
						mode = mode || 'local';

						//Remote notes are *always* deleted remotely and locally
						//so there's no break!!!
						switch (mode) {
							case 'remote':
								//NoteRemoteProvider.deleteNote(noteKey);
							case 'local':
							default:

								localStorage.removeItem(noteKey);
								
								//update TOC
								var noteKeys = this.getNoteKeys();
								for (var i=0; i < noteKeys.length; i++) {
									if(noteKeys[i] === noteKey){
										noteKeys.splice(i, 1);
										break;
									}
								};
								//Store TOC in local storage
								this.saveNoteKeys(noteKeys);
						}

					},
					saveDirtyNotes: function(){

					}
				};
			};
		});
}());
