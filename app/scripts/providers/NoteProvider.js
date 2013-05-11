(function () {
	'use strict';

	angular.module('inotesApp')
		.provider('Note', function () {

			this.endpoint = 'http://192.168.0.87/web/app_dev.php/inotes/user/noob/';
			this.setEndpoint = function (endpoint) {
				this.endpoint = endpoint;
			}

			this.$get = function ($http, NotesDirtyService) {
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
						var noteKeys = JSON.parse(localStorage.getItem('noteKeys'));
						return noteKeys ? noteKeys : [];
					},
					saveNoteKeys: function (noteKeys) {
						/*console.log('saveNoteKeys');*/
						//Store TOC in local storage
						localStorage.setItem('noteKeys', JSON.stringify(noteKeys));
					},
					generateId: function () {
						var
							s = [],
					    hexDigits = "0123456789abcdef";
					    for (var i = 0; i < 36; i++) {
					        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
					    }
						return s.join('');
					},
					createNote: function () {
						var id = this.generateId();

						return {
							id: id,
							creationDate: new Date().toISOString(),
							modificationDate: null,
							thumbnail: null,
							drawing:{
								strokes: [
								]
							}
						};
					},
					getNoteList: function () {
						/*console.log('getNoteList');*/
						var ret = [],
							noteKeys = this.getNoteKeys();
						for (var noteKey in noteKeys) {
							ret.push(JSON.parse(localStorage.getItem(noteKeys[noteKey])));
						}

						return ret;
					},
					getNoteListRemote: function () {
						var instance = this;
						$http.get(endpoint + 'list', {})
						.success(function (data, status, headers, config) {
							var notes = data.notes,
							noteKeys = [];
							//Delete locally stored notes
							localStorage.clear();

							for(var note in notes){
								instance.saveNote(notes[note], 'init');
								noteKeys.push(notes[note].id);
							}

							instance.saveNoteKeys(noteKeys);
						})
						.error(function (data, status, headers, config) {
							throw 'Error fetching remote notes';
						});
					},
					getNote: function (noteKey) {
						var note = JSON.parse(localStorage.getItem(noteKey));
						if (!note) {
							note = this.createNote();
						}
						note.drawing = note.drawing || {};
						note.drawing.strokes = note.drawing.strokes || [];
						return note;
					},
					saveNote: function (note, mode) {
						localStorage.setItem(note['id'], JSON.stringify(note));
						var noteKeys = this.getNoteKeys(),
							isInArray = false;
						for(var i=0; i<noteKeys.length; i++) {
							if (noteKeys[i] === note['id']) {
								isInArray = true;
							}
						}
						isInArray ? null : noteKeys.push(note['id']);
						
						if(mode !== 'init'){
							//Mark note as dirty
							NotesDirtyService.addNoteId(note['id']);
						}
						//Store TOC in local storage
						this.saveNoteKeys(noteKeys);
					},
					saveNoteRemote: function (note) {
						//TODO implement me!
						console.info('saveNoteRemote sais: implement me pleeease!!');

						//TODO does not work yet
						$http.put(endpoint + 'note/' + note.id, note)
						.success(function (data, status, headers, config) {
							console.info('success');
							console.log(data);
							console.log(status);
							console.log(headers);
							console.log(config);
						})
						.error(function (data, status, headers, config) {
							console.info('error');
							console.log(data);
							console.log(status);
							console.log(headers);
							console.log(config);
						});
					},
					deleteNote: function (noteKey, mode) {
						localStorage.removeItem(noteKey);

						//update TOC
						var noteKeys = this.getNoteKeys();
						for (var i=0; i < noteKeys.length; i++) {
							if(noteKeys[i] === noteKey){
								noteKeys.splice(i, 1);
								break;
							}
						};
						
						//Remove from dirty notes index
						NotesDirtyService.removeNoteId(noteKey);
						
						//Store TOC in local storage
						this.saveNoteKeys(noteKeys);
					},
					deleteNoteRemote: function (noteKey) {
						//TODO implement me!
						console.info('deleteNoteRemote sais: implement me pleeease!!');

					},
					saveDirtyNotes: function(){
						var dirtyNoteIds = NotesDirtyService.getNoteIds();
						
						for (var i=0; i < dirtyNoteIds.length; i++) {
							
							//Load note from local storage
							var currentDirtyNoteId = dirtyNoteIds[i],
							currentDirtyNote = this.getNote(currentDirtyNoteId);

							//Send note to server
							this.saveNoteRemote(currentDirtyNote);
							
							//Remove from dirty notes index
							NotesDirtyService.removeNoteId(currentDirtyNoteId);
						};
					}
				};
			};
		});
}());
