let isDrawing = false;

function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  // While mouse is pressed, draw a line to the current position
  if (isDrawing) {
    stroke(0);
    strokeWeight(3);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  
  fill(0);
  textSize(12);
  text('Drag to draw', 10, 20);
}

function mousePressed() {
  isDrawing = true;
}

function mouseReleased() {
  isDrawing = false;
}
