(function () {
	'use strict';

    var mockNote = {
        id: null,
        modificationDate: null,
        creationDate: null,
        drawing: {
            strokes: [{"width":5,"color":"#828b20","points":[{"x":308,"y":33},{"x":308,"y":32},{"x":306,"y":31},{"x":303,"y":29},{"x":299,"y":29},{"x":291,"y":28},{"x":283,"y":28},{"x":277,"y":30},{"x":269,"y":33},{"x":262,"y":36},{"x":256,"y":42},{"x":252,"y":49},{"x":249,"y":55},{"x":247,"y":60},{"x":247,"y":67},{"x":247,"y":74},{"x":250,"y":81},{"x":256,"y":90},{"x":262,"y":97},{"x":267,"y":101},{"x":274,"y":107},{"x":281,"y":111},{"x":291,"y":117},{"x":303,"y":123},{"x":314,"y":129},{"x":327,"y":134},{"x":339,"y":140},{"x":352,"y":143},{"x":361,"y":144},{"x":367,"y":144},{"x":373,"y":144},{"x":376,"y":144},{"x":378,"y":141},{"x":381,"y":134},{"x":383,"y":125},{"x":386,"y":120},{"x":388,"y":115},{"x":389,"y":108},{"x":390,"y":100},{"x":390,"y":93},{"x":390,"y":89},{"x":389,"y":85},{"x":388,"y":79},{"x":386,"y":75},{"x":382,"y":70},{"x":380,"y":66},{"x":377,"y":63},{"x":374,"y":61},{"x":370,"y":59},{"x":365,"y":56},{"x":358,"y":53},{"x":353,"y":51},{"x":348,"y":50},{"x":344,"y":49},{"x":341,"y":47},{"x":337,"y":47},{"x":334,"y":47},{"x":331,"y":46},{"x":328,"y":46},{"x":323,"y":45},{"x":321,"y":45},{"x":320,"y":44},{"x":319,"y":43},{"x":317,"y":43},{"x":316,"y":42},{"x":314,"y":41},{"x":313,"y":39},{"x":310,"y":39},{"x":309,"y":38},{"x":306,"y":38},{"x":303,"y":36},{"x":301,"y":36},{"x":300,"y":35}]},{"width":5,"color":"#cbc53d","points":[{"x":287,"y":57},{"x":288,"y":57},{"x":289,"y":57},{"x":292,"y":58},{"x":296,"y":59},{"x":301,"y":61},{"x":306,"y":64},{"x":312,"y":65},{"x":318,"y":67},{"x":320,"y":67},{"x":321,"y":67},{"x":323,"y":67},{"x":323,"y":67},{"x":325,"y":67},{"x":326,"y":67},{"x":327,"y":68},{"x":330,"y":69},{"x":334,"y":72},{"x":337,"y":73},{"x":339,"y":73},{"x":343,"y":74},{"x":346,"y":75},{"x":351,"y":76},{"x":354,"y":77}]},{"width":5,"color":"#cbc53d","points":[{"x":302,"y":62},{"x":301,"y":62},{"x":300,"y":62},{"x":300,"y":62},{"x":299,"y":62},{"x":299,"y":63},{"x":298,"y":63},{"x":297,"y":64},{"x":296,"y":64},{"x":295,"y":66},{"x":294,"y":68},{"x":294,"y":69},{"x":293,"y":70},{"x":292,"y":71},{"x":292,"y":73},{"x":292,"y":74},{"x":292,"y":75},{"x":292,"y":76},{"x":293,"y":77},{"x":294,"y":77},{"x":295,"y":78},{"x":297,"y":79},{"x":299,"y":80},{"x":301,"y":80},{"x":303,"y":80},{"x":304,"y":80},{"x":305,"y":80},{"x":306,"y":80},{"x":307,"y":80},{"x":307,"y":80},{"x":308,"y":80},{"x":311,"y":79},{"x":311,"y":77},{"x":312,"y":76},{"x":312,"y":75},{"x":312,"y":74},{"x":312,"y":72},{"x":312,"y":71},{"x":312,"y":70},{"x":312,"y":69},{"x":312,"y":69},{"x":311,"y":69},{"x":310,"y":68},{"x":309,"y":68},{"x":308,"y":68},{"x":307,"y":68},{"x":306,"y":68},{"x":305,"y":68},{"x":304,"y":68},{"x":303,"y":67},{"x":302,"y":67},{"x":299,"y":67},{"x":296,"y":67},{"x":295,"y":67},{"x":293,"y":67},{"x":293,"y":67},{"x":292,"y":68},{"x":290,"y":68},{"x":290,"y":69},{"x":290,"y":70},{"x":290,"y":71},{"x":290,"y":72},{"x":290,"y":73},{"x":290,"y":74},{"x":291,"y":75},{"x":292,"y":76},{"x":293,"y":77},{"x":296,"y":78},{"x":298,"y":79},{"x":300,"y":79},{"x":301,"y":79},{"x":302,"y":79},{"x":302,"y":79},{"x":303,"y":79},{"x":304,"y":77},{"x":304,"y":76},{"x":305,"y":76},{"x":305,"y":75},{"x":306,"y":75},{"x":306,"y":74},{"x":306,"y":74},{"x":305,"y":73},{"x":304,"y":72},{"x":303,"y":72},{"x":302,"y":72},{"x":301,"y":72},{"x":300,"y":72},{"x":299,"y":73},{"x":298,"y":73},{"x":297,"y":73},{"x":295,"y":73},{"x":295,"y":75},{"x":296,"y":75},{"x":298,"y":76},{"x":299,"y":77},{"x":300,"y":77},{"x":300,"y":77},{"x":301,"y":77},{"x":302,"y":76},{"x":303,"y":76},{"x":303,"y":76},{"x":304,"y":76},{"x":304,"y":75},{"x":304,"y":75},{"x":304,"y":74},{"x":305,"y":74},{"x":306,"y":74}]},{"width":5,"color":"#cbc53d","points":[{"x":333,"y":74},{"x":332,"y":73},{"x":331,"y":73},{"x":328,"y":73},{"x":327,"y":73},{"x":326,"y":73},{"x":325,"y":73},{"x":324,"y":73},{"x":323,"y":73},{"x":322,"y":73},{"x":322,"y":74},{"x":320,"y":75},{"x":320,"y":76},{"x":320,"y":77},{"x":320,"y":78},{"x":321,"y":78},{"x":321,"y":79},{"x":322,"y":80},{"x":323,"y":80},{"x":324,"y":81},{"x":325,"y":81},{"x":325,"y":82},{"x":327,"y":82},{"x":327,"y":82},{"x":328,"y":82},{"x":329,"y":82},{"x":330,"y":82},{"x":331,"y":82},{"x":333,"y":82},{"x":335,"y":82},{"x":337,"y":82},{"x":337,"y":81},{"x":338,"y":80},{"x":338,"y":79},{"x":338,"y":78},{"x":338,"y":77},{"x":338,"y":76},{"x":337,"y":76},{"x":336,"y":76},{"x":335,"y":76},{"x":334,"y":76},{"x":333,"y":76},{"x":333,"y":76},{"x":332,"y":76},{"x":330,"y":77},{"x":329,"y":77},{"x":328,"y":77},{"x":328,"y":78},{"x":326,"y":78}]},{"width":5,"color":"#fad779","points":[{"x":286,"y":89},{"x":287,"y":89},{"x":288,"y":89},{"x":292,"y":90},{"x":298,"y":91},{"x":302,"y":91},{"x":304,"y":91},{"x":305,"y":91},{"x":305,"y":91},{"x":305,"y":92},{"x":306,"y":92},{"x":307,"y":94},{"x":309,"y":95},{"x":309,"y":95},{"x":311,"y":96},{"x":312,"y":96},{"x":313,"y":96},{"x":314,"y":96},{"x":316,"y":96},{"x":317,"y":96},{"x":319,"y":96},{"x":321,"y":96},{"x":322,"y":96},{"x":324,"y":96},{"x":326,"y":97},{"x":329,"y":99},{"x":331,"y":100},{"x":335,"y":102},{"x":338,"y":103},{"x":342,"y":103},{"x":344,"y":104},{"x":347,"y":104},{"x":348,"y":104},{"x":349,"y":104},{"x":350,"y":103},{"x":351,"y":103},{"x":352,"y":103},{"x":353,"y":103},{"x":354,"y":103},{"x":355,"y":103},{"x":356,"y":104},{"x":357,"y":105},{"x":357,"y":106}]},{"width":"20","color":"#f9e4ad","points":[{"x":245,"y":46},{"x":245,"y":45},{"x":245,"y":44},{"x":245,"y":43},{"x":247,"y":41},{"x":248,"y":40},{"x":249,"y":39},{"x":250,"y":38},{"x":251,"y":36},{"x":252,"y":35},{"x":253,"y":34},{"x":254,"y":32},{"x":256,"y":31},{"x":257,"y":29},{"x":258,"y":28},{"x":260,"y":26},{"x":263,"y":25},{"x":265,"y":24},{"x":266,"y":23},{"x":266,"y":22},{"x":267,"y":22},{"x":268,"y":21},{"x":269,"y":20},{"x":271,"y":20},{"x":273,"y":19},{"x":274,"y":19},{"x":275,"y":19},{"x":276,"y":19},{"x":278,"y":19},{"x":280,"y":19},{"x":282,"y":19},{"x":285,"y":19},{"x":287,"y":19},{"x":288,"y":19},{"x":289,"y":19},{"x":291,"y":19},{"x":292,"y":19},{"x":293,"y":19},{"x":294,"y":19},{"x":297,"y":19},{"x":299,"y":19},{"x":300,"y":19},{"x":301,"y":19},{"x":302,"y":19},{"x":303,"y":19},{"x":304,"y":19},{"x":306,"y":19},{"x":308,"y":20},{"x":312,"y":21},{"x":315,"y":22},{"x":317,"y":23},{"x":318,"y":23},{"x":320,"y":24},{"x":321,"y":25},{"x":322,"y":25},{"x":322,"y":26},{"x":323,"y":27},{"x":324,"y":28},{"x":324,"y":29},{"x":325,"y":29},{"x":325,"y":30},{"x":326,"y":31},{"x":326,"y":32},{"x":328,"y":34},{"x":329,"y":34},{"x":329,"y":36},{"x":331,"y":37},{"x":332,"y":38},{"x":333,"y":38},{"x":334,"y":39},{"x":335,"y":39},{"x":336,"y":39},{"x":337,"y":40},{"x":338,"y":40},{"x":338,"y":41},{"x":339,"y":41},{"x":341,"y":41},{"x":342,"y":42},{"x":343,"y":42},{"x":344,"y":42},{"x":345,"y":43},{"x":347,"y":44},{"x":350,"y":45},{"x":353,"y":46},{"x":358,"y":47},{"x":364,"y":49},{"x":372,"y":51},{"x":380,"y":54},{"x":386,"y":56},{"x":392,"y":57},{"x":395,"y":58},{"x":398,"y":59},{"x":400,"y":60},{"x":400,"y":61},{"x":400,"y":62},{"x":400,"y":63},{"x":399,"y":64},{"x":398,"y":64},{"x":398,"y":65},{"x":397,"y":66},{"x":396,"y":67},{"x":396,"y":68},{"x":396,"y":68},{"x":396,"y":69},{"x":396,"y":72},{"x":396,"y":74},{"x":396,"y":75},{"x":396,"y":76},{"x":396,"y":77},{"x":396,"y":78},{"x":396,"y":79},{"x":396,"y":79},{"x":396,"y":80},{"x":397,"y":82},{"x":397,"y":83},{"x":397,"y":84},{"x":397,"y":85},{"x":398,"y":85},{"x":398,"y":87},{"x":399,"y":87},{"x":399,"y":88},{"x":399,"y":89},{"x":399,"y":90},{"x":399,"y":91},{"x":399,"y":92},{"x":399,"y":93},{"x":399,"y":94},{"x":399,"y":95},{"x":399,"y":96},{"x":399,"y":97},{"x":399,"y":97},{"x":399,"y":98},{"x":399,"y":99}]}]
        },
        thumbnail: null,
        text: null
    };
    
    angular.module('inotesApp')
        .controller('NoteController', function ($scope, $location, $routeParams, Note) {


            $scope.note = null;

            if ($routeParams.noteId !== '') {
                $scope.note = Note.getNote($routeParams.noteId);
                if($scope.note === null){
                    console.log('Note not found using id ' + $routeParams.noteId);
                    $location.path('/');
                    return false;
                }else{
                    console.log('Restored note using id ' + $routeParams.noteId);
                }
            }

            if($scope.note === null){
                $scope.note = Note.createNote();
                console.log('created note ' + $scope.note.id);
            }

            $scope.saveNote = function() {
                Note.saveNote($scope.note, 'local');
                console.log('Saved note with id ' + $scope.note.id);
            }

            $scope.deleteNote = function() {
                var confirmDelete = confirm('Do you really want to delete this note?');
                if (confirmDelete === true) {
                    Note.deleteNote($scope.note.id, 'local');
                    $location.path('/');
                };
            }
            var model = NoteProvider.getNote($routeParams.noteId);

            this.showDrawing = function () {
                this.clearDrawing();

                for (var i = 0, length = model.drawing.strokes.length; i < length; ++i) {
                    var stroke = model.drawing.strokes[i];

                    this.drawStroke(stroke);
                }

                stage.update();
            };

            this.clearDrawing = function () {

                if (stage.contains(title)) {
                    stage.clear();
                    stage.removeChild(title);
                }

                stage.update();
            };

            this.drawStroke = function (stroke) {

                var graphics = drawingCanvas.graphics.setStrokeStyle(stroke.width, 'round', 'round').beginStroke(stroke.color);
                graphics.moveTo(stroke.points[0].x, stroke.points[1].y);
                for (var i = 0, length = stroke.points.length - 1; i < length; i += 2) {
                    var p1 = stroke.points[i];
                    var p2 = stroke.points[i + 1];
                    var midPt = new createjs.Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
                    graphics.curveTo(p2.x, p2.y, midPt.x, midPt.y);
                }
                graphics.endStroke();
            };

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

            var strokes = mockNote.drawing.strokes;
            var currentStroke = null;

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

            this.showDrawing();

            $scope.onMouseDown = function() {

                oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
                oldMidPt = oldPt;

                isDrawing = true;
                currentStroke = {
                    width: $scope.strokeWidth,
                    color: $scope.color,
                    points: []
                };
                strokes.push(currentStroke);

                console.info('onMouseDown', oldPt);
            }

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
            }

            $scope.onMouseUp = function() {
                isDrawing = false;
                currentStroke = null;
            }



		});
}(this));
