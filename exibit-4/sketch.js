let points = [];
let currentColor = [0, 0, 0];
let brushSize = 10;

function setup() {
  createCanvas(700, 700);
  background(255);
}

function draw() {
  background(255);
  
  // UI
  fill(0);
  noStroke();
  textSize(12);
  text('Colors: 1-5 | Clear: C | Size +/-', 10, 20);
  text('Brush Size: ' + brushSize, 10, 40);
  
  // Draw all strokes
  for (let i = 0; i < points.length; i++) {
    stroke(points[i].color);
    strokeWeight(points[i].size);
    line(points[i].x1, points[i].y1, points[i].x2, points[i].y2);
  }
}

function mouseDragged() {
  points.push({
    x1: pmouseX,
    y1: pmouseY,
    x2: mouseX,
    y2: mouseY,
    color: currentColor,
    size: brushSize
  });
  return false;
}

function keyPressed() {
  // Colors
  if (key === '1') currentColor = [0, 0, 0];       // Black
  if (key === '2') currentColor = [255, 0, 0];     // Red
  if (key === '3') currentColor = [0, 200, 0];     // Green
  if (key === '4') currentColor = [0, 0, 255];     // Blue
  if (key === '5') currentColor = [200, 100, 0];   // Orange
  
  // Clear
  if (key === 'C' || key === 'c') {
    points = [];
  }
  
  // Size
  if (key === '+' || key === '=') brushSize += 2;
  if (key === '-') brushSize -= 2;
  
  brushSize = constrain(brushSize, 2, 50);
}
