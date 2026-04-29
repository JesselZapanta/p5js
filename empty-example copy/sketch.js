let x = 250;
let y = 250;
let speed = 10;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  
  fill(100, 150, 255);
  circle(x, y, 30);
  
  fill(0);
  textSize(12);
  text('Use arrow keys to move circle', 10, 20);
}

function keyPressed() {
  // LEFT arrow
  if (keyCode === LEFT_ARROW) {
    x -= speed;
  }
  // RIGHT arrow
  if (keyCode === RIGHT_ARROW) {
    x += speed;
  }
  // UP arrow
  if (keyCode === UP_ARROW) {
    y -= speed;
  }
  // DOWN arrow
  if (keyCode === DOWN_ARROW) {
    y += speed;
  }
}
