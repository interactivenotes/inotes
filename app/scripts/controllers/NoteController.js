(function () {
	'use strict';

    angular.module('inotesApp')
        .controller('NoteController', function ($scope, $location, $routeParams, Note) {

			// Initialising
			var canvas;
			var stage;
			var drawingCanvas;
			var title;
			var midPt;
			var oldPt;
			var oldMidPt;
			var isDrawing;
			var currentStroke = null;

			if ($routeParams.noteId !== '') {
				$scope.note = Note.getNote($routeParams.noteId);
				if ($scope.note === null) {
					$scope.note = Note.createNote();
					/*console.log('Note not found using id ' + $routeParams.noteId);*/
				} else {
					/*console.log('Restored note using id ' + $routeParams.noteId);*/
				}
			} else {
				$scope.note = Note.createNote();
			}

			$scope.saveNote = function () {
				Note.saveNote($scope.note, 'local');
				/*console.log($scope.note);*/
				$scope.note.modificationDate = new Date().toISOString();
				// if (location.hash.search($scope.note.id) === -1) {
				// 	location.hash = location.hash + $scope.note.id;
				// 	//$location.url(currUrl + $scope.note.id);
				// }
				/*console.log('Saved note with id ' + $scope.note.id);*/
			};

			$scope.deleteNote = function() {
				var confirmDelete = confirm('Do you really want to delete this note?');
				if (confirmDelete === true) {
					Note.deleteNote($scope.note.id, 'local');
					$location.path('/');
				};
			}

			$scope.showDrawing = function () {
					$scope.clearDrawing();

					for (var i = 0, length = $scope.note.drawing.strokes.length; i < length; ++i) {
							var stroke = $scope.note.drawing.strokes[i];
							if (stroke) {
								$scope.drawStroke(stroke);
							}
					}

					stage.update();
			};

			$scope.clearDrawing = function () {

					if (stage.contains(title)) {
							stage.clear();
							stage.removeChild(title);
					}

					stage.update();
			};

			$scope.drawStroke = function (stroke) {

					var graphics = drawingCanvas.graphics.setStrokeStyle(stroke.width, 'round', 'round').beginStroke(stroke.color);
					graphics.moveTo(stroke.points[0].x, stroke.points[0].y);

					for (var i = 0, length = stroke.points.length - 1; i < length; i += 2) {

                            var p1 = (i == 0)? stroke.points[ i ] : stroke.points[ i - 1 ];
                            var p2 = stroke.points[i];
                            var p3 = stroke.points[i + 1];

                            graphics.moveTo(p1.x, p1.y).curveTo(p2.x, p2.y, p3.x, p3.y);
					}
					graphics.endStroke();
			};


			canvas = document.getElementById("drawing");

            $scope.colors = ['#555555','#999999','#33CC99','#0099CC','#FFCC00','#FF9900','#CC0000'];

			$scope.color = $scope.colors[0];

			$scope.strokeStyle = {
				minWidth: 5,
				maxWidth: 30,
				step: 5
			};
			$scope.strokeWidth = $scope.strokeStyle.minWidth;

            $scope.visualizeStrokeWidth = function () {
                return Math.floor(this.strokeWidth / 2);
            };

			//check to see if we are running in a browser with touch support

			stage = new createjs.Stage(canvas);
			stage.autoClear = false;
			stage.enableDOMEvents(true);

			createjs.Touch.enable(stage);
			createjs.Ticker.setFPS(24);

			drawingCanvas = new createjs.Shape();
			title = new createjs.Text("inotes drawing", "26px Arial", "#777777");
			title.x = 300;
			title.y = 200;
			stage.addChild(title);
			stage.addChild(drawingCanvas);

			$scope.showDrawing();

			$scope.onMouseDown = function() {

					oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
					oldMidPt = oldPt;

					isDrawing = true;
					currentStroke = {
							width: $scope.strokeWidth,
							color: $scope.color,
							points: []
					};

                    currentStroke.points.push({
                        x: stage.mouseX,
                        y: stage.mouseY
                    });

                    $scope.note.drawing.strokes.push(currentStroke);

					/*console.info('onMouseDown', oldPt);*/
			};

			$scope.onMouseMove = function() {
					if (isDrawing) {
							midPt = new createjs.Point((oldPt.x + stage.mouseX) / 2 , (oldPt.y + stage.mouseY) / 2);

							currentStroke.points.push({
									x: stage.mouseX,
									y: stage.mouseY
							});

							drawingCanvas.graphics.clear().setStrokeStyle($scope.strokeWidth, 'round', 'round').beginStroke($scope.color).moveTo(midPt.x, midPt.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);

							oldPt.x = stage.mouseX;
							oldPt.y = stage.mouseY;

							oldMidPt.x = midPt.x;
							oldMidPt.y = midPt.y;

							stage.update();
					}
			};

			$scope.onMouseUp = function() {
					isDrawing = false;
					currentStroke = null;
					$scope.saveNote($scope.note, 'local');
			};

            canvas.addEventListener('touchstart', function () {
                $scope.onMouseDown();
            });

            canvas.addEventListener('touchmove', function () {
                $scope.onMouseMove();
            });

            canvas.addEventListener('touchend', function () {
                $scope.onMouseUp();
            });
					$scope.backToHome = function () {
						$location.path('/');
					}

				$scope.displayDrawingArea = function () {

				var canvas = document.getElementById("drawing").style.display = 'block';
				var textarea = document.getElementById("textarea").style.display = 'none';
				var canvas = document.getElementById("drawingControls").style.display = 'block';

				}


				$scope.displayTextArea = function () {
					// TODO use the highlght class to show the active element
				var canvas = document.getElementById("drawing").style.display = 'none';
				var textarea = document.getElementById("textarea").style.display ='block';
				var canvas = document.getElementById("drawingControls").style.display = 'none';

				}

		});
}(this));
