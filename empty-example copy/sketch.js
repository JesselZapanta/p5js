let points = [];
let shapeMode = 'circle'; // 'circle' or 'square'

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  
  fill(100, 150, 255);
  for (let i = 0; i < points.length; i++) {
    let p = points[i];

    if (shapeMode === 'circle') {
      circle(p.x, p.y, 20);
    } else {
      square(p.x - 10, p.y - 10, 20);
    }
  }
  
  fill(0);
  textSize(12);
  text('Press S to toggle shape | Click to draw', 10, 20);
}

function mousePressed() {
  points.push({ x: mouseX, y: mouseY });
}

function keyPressed() {
  if (key === 'S' || key === 's') {
    shapeMode = (shapeMode === 'circle') ? 'square' : 'circle';
  }
}
