(function () {
	'use strict';

	angular.module('inotesApp')
		.controller('NoteController', function ($scope, $location, $routeParams, NoteProvider, NotesDirtyService) {

			if ($routeParams.noteId === '') {
				$location.path('/');
			}

        var canvas;
        var stage;
        var drawingCanvas;
        var title;
        var midPt;
        var oldPt;
        var oldMidPt;
        var isDrawing;

        canvas = document.getElementById("drawing");

        $scope.colors = [
            '#828b20',
            '#b0ac31',
            '#cbc53d',
            '#fad779',
            '#f9e4ad'
        ];

        $scope.color = $scope.colors[0];

        $scope.strokeStyle = {
            minWidth: 5,
            maxWidth: 30,
            step: 5
        };
        $scope.strokeWidth = $scope.strokeStyle.minWidth;

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
        stage.update();

        $scope.onMouseDown = function() {
            if (stage.contains(title)) { stage.clear(); stage.removeChild(title); }

            oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
            oldMidPt = oldPt;
            isDrawing = true;

            console.info('onMouseDown'+ oldPt);
        }

        $scope.onMouseMove = function() {
            if (isDrawing) {
                midPt = new createjs.Point((oldPt.x + stage.mouseX) / 2 , (oldPt.y + stage.mouseY) /2);
                drawingCanvas.graphics.clear().setStrokeStyle($scope.strokeWidth, 'round', 'round').beginStroke($scope.color).moveTo(midPt.x, midPt.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);

                oldPt.x = stage.mouseX;
                oldPt.y = stage.mouseY;

                oldMidPt.x = midPt.x;
                oldMidPt.y = midPt.y;

                stage.update();
            }
        }

        $scope.onMouseUp = function() {
            isDrawing = false;
            console.info('onMouseUp');
        }




			NotesDirtyService.addNoteId($routeParams.noteId);

			console.info('Dirty notes:')
			console.info(NotesDirtyService.getNoteIds());

		});
}());
