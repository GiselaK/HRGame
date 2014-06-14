function createBall(x, y, name){
	var ball = {
		velocity: {x: 0, y: 0},
		name: name,
    speed: 0.09,
		position: {x: x, y: y},
    draw: draw,
    move: move,
    fire: fire,
    isMoving: false
  }; 
  return ball;    
}

function move() {
  this.velocity.x *= 0.98;
  this.velocity.y *= 0.98;
  this.position.x += this.velocity.x;
  this.position.y += this.velocity.y;
  checkForBounderyCollision(this);
}
//added onto github

function draw() {
  this.move();

  ctx.beginPath();
  ctx.arc(this.position.x, this.position.y, 25, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();

  if( lineActive(this.name) ) {
    ctx.beginPath();
    ctx.moveTo(this.position.x, this.position.y);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.closePath();
  }
};

function lineActive(name) {
  return mouse.isDown && (activeBall.name === name) && !activeBall.isMoving;
}

function fire(){
  this.isMoving = true;
  this.velocity.x = (this.position.x - mouse.x) * this.speed;
  this.velocity.y = (this.position.y - mouse.y) * this.speed;
}

function checkForBounderyCollision(ball){
  if((Math.pow((centerX - ball.position.x), 2) + Math.pow((centerY - ball.position.y), 2)) > Math.pow(plateRadius,2)) {
    console.log('boom')
  }

}
