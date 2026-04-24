let points = [];
let currentColor = [0, 0, 0]; // Default: black

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  background(255);
  
  // Draw all points with their stored colors
  for (let i = 0; i < points.length; i++) {
    fill(points[i].color[0], points[i].color[1], points[i].color[2]);
    circle(points[i].x, points[i].y, 10);
  }
}

function mousePressed() {
  points.push({
    x: mouseX,
    y: mouseY,
    color: currentColor
  });
}

function keyPressed() {
  // 'R' for red
  if (key === 'R' || key === 'r') {
    currentColor = [255, 0, 0];
  }
  // 'G' for green
  if (key === 'G' || key === 'g') {
    currentColor = [0, 255, 0];
  }
  // 'B' for blue
  if (key === 'B' || key === 'b') {
    currentColor = [0, 0, 255];
  }
  // 'C' for clear
  if (key === 'C' || key === 'c') {
    points = [];
  }
}
