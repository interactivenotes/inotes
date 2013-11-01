(function (window) {
	'use strict';
	var angular = window.angular;

	angular.module('inotesApp')
		.provider('Note', function () {

			this.endpoint = 'http://inotes.virtual/app_dev.php/inotes/user/noob/';
			this.setEndpoint = function (endpoint) {
				this.endpoint = endpoint;
			};

			this.$get = function ($http, NotesDirtyService) {
				var endpoint = this.endpoint;
				return {
					initStorage: function () {
						try {
							//Fetch all notes from remote and store locally
							this.getNoteListRemote();
						} catch (e) {

						}

					},

					getNoteKeys: function () {
						var noteKeys = JSON.parse(window.localStorage.getItem('noteKeys'));
						return noteKeys || [];
					},
					saveNoteKeys: function (noteKeys) {
						/*console.log('saveNoteKeys');*/
						//Store TOC in local storage
						window.localStorage.setItem('noteKeys', JSON.stringify(noteKeys));
					},
					generateId: function () {
						var
							s = [],
							hexDigits = '0123456789abcdef',
							i;
						for (i = 0; i < 36; i += 1) {
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
							drawing: {
								strokes: [
								]
							}
						};
					},
					getNoteList: function () {
						/*console.log('getNoteList');*/
						var ret = [],
							noteKeys = this.getNoteKeys(),
							noteKey;
						for (noteKey in noteKeys) {
							if (noteKeys.hasOwnProperty(noteKey)) {
								ret.push(JSON.parse(window.localStorage.getItem(noteKeys[noteKey])));
							}
						}

						return ret;
					},
					getNoteListRemote: function () {
						var instance = this;
						$http.get(endpoint + 'list', {})
							.success(function (data) {
								var notes = data.notes,
									noteKeys = [],
									note;

								//TODO only remove notes from local storage
								//Delete locally stored notes
								window.localStorage.clear();

								for (note in notes) {
									if (notes.hasOwnProperty(note)) {
										instance.saveNote(notes[note], 'init');
										noteKeys.push(notes[note].id);
									}
								}

								instance.saveNoteKeys(noteKeys);
							})
							.error(function () {
								throw 'Error fetching remote notes';
							});
					},
					getNote: function (noteKey) {
						var note = JSON.parse(window.localStorage.getItem(noteKey));
						if (!note) {
							note = this.createNote();
						}
						note.drawing = note.drawing || {};
						note.drawing.strokes = note.drawing.strokes || [];
						return note;
					},
					saveNote: function (note, mode) {
						window.localStorage.setItem(note.id, JSON.stringify(note));
						var noteKeys = this.getNoteKeys(),
							isInArray = false,
							i;
						for (i = 0; i < noteKeys.length; i += 1) {
							if (noteKeys[i] === note.id) {
								isInArray = true;
							}
						}
						if (!isInArray) {
							noteKeys.push(note.id);
						}

						if (mode !== 'init') {
							//Mark note as dirty
							NotesDirtyService.addNoteId(note.id);
						}
						//Store TOC in local storage
						this.saveNoteKeys(noteKeys);
					},
					saveNoteRemote: function (note) {
						// console.info('saveNoteRemote sais: implement me pleeease!!');
						var instance = this;
						$http.put(endpoint + 'note/' + note.remoteId, note)
							.success(function (data) {
								instance.saveNote(data);
							})
							.error(function () {
								window.console.info('error savong note remote');
								// console.log(data);
								// console.log(status);
								// console.log(headers);
								// console.log(config);
							});
					},
					createNoteRemote: function (note) {
						var instance = this;
						$http.post(endpoint + 'note', note)
							.success(function (data) {
								instance.saveNote(data);
							})
							.error(function () {
								window.console.info('error creating note remote');
								// console.log(data);
								// console.log(status);
								// console.log(headers);
								// console.log(config);
							});
					},
					deleteNote: function (noteKey, mode) {

						var note = this.getNote(noteKey),
							noteKeys,
							i;

						if (mode === 'remote') {
							this.deleteNoteRemote(note.remoteId);
						}

						window.localStorage.removeItem(noteKey);

						//update TOC
						noteKeys = this.getNoteKeys();
						for (i = 0; i < noteKeys.length; i += 1) {
							if (noteKeys[i] === noteKey) {
								noteKeys.splice(i, 1);
								break;
							}
						}

						//Remove from dirty notes index
						NotesDirtyService.removeNoteId(noteKey);

						//Store TOC in local storage
						this.saveNoteKeys(noteKeys);
					},
					deleteNoteRemote: function (noteKey) {
						$http.delete(endpoint + 'note/' + noteKey, {})
							/*.success(function (data, status, headers, config) {
							})*/
							.error(function (data, status, headers, config) {
								window.console.info('error deleting note remote');
									 console.log(data);
									 console.log(status);
									 console.log(headers);
									 console.log(config);
							});

					},
					saveDirtyNotes: function () {
						var dirtyNoteIds = NotesDirtyService.getNoteIds(),
							currentDirtyNoteId,
							currentDirtyNote,
							i;

						for (i = 0; i < dirtyNoteIds.length; i += 1) {

							//Load note from local storage
							currentDirtyNoteId = dirtyNoteIds[i];
							currentDirtyNote = this.getNote(currentDirtyNoteId);

							if (typeof currentDirtyNote.remoteId !== 'undefined' && currentDirtyNote.remoteId !== '') {
								//Send note to server
								this.saveNoteRemote(currentDirtyNote);
							} else {
								this.createNoteRemote(currentDirtyNote);
							}

							//Remove from dirty notes index
							NotesDirtyService.removeNoteId(currentDirtyNoteId);
						}
					}
				};
			};
		});
}(this));
