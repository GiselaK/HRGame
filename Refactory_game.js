var canvas      = document.getElementById('game'),
    ctx         = canvas.getContext("2d"),
    width       = canvas.width,
    height      = canvas.height,
    centerX     = canvas.width/2 + 10,
    centerY	  	= canvas.height/2 + 10,
    plateRadius = 430;

canvas.onmousemove = getMousePosition;
canvas.onmousedown = mouseDown;
canvas.onmouseup   = mouseUp;


var ball1 = createBall(340, 280, 'ball1');
var ball2 = createBall(580, 700, 'ball2');
var mouse = {x: 0, y: 0, isDown: false}
var activeBall = ball1;


function getMousePosition(e) {
	mouse.x = e.pageX - canvas.offsetLeft;
	mouse.y = e.pageY - canvas.offsetTop;
}

function mouseDown(e) {
	mouse.isDown = true;
}

function mouseUp() {
	mouse.isDown = false;
	if (activeBall.isMoving) { return; }
	activeBall.fire();
	activeBall.isMoving = true;
}

function checkForChangeTurn() {
	if ( activeBall.isMoving && Math.abs(activeBall.velocity.x) < 0.05 && Math.abs(activeBall.velocity.y) < 0.05 ) {
		activeBall.isMoving = false;
		switchTurns();
	}
}

function switchTurns() {
	activeBall = ( ( activeBall.name === 'ball1' ) ? ball2 : ball1 );
}

function loop(){
	// clears canvas
	canvas.width = width;

	ball1.draw();
	ball2.draw();
	checkForChangeTurn();
}

setInterval(loop, 1000/60);
