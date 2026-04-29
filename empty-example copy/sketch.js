let points = [];

function setup() {
  createCanvas(600, 600);
  background(255);

    
  fill(0);
  textSize(12);
  text('Click to draw | Press C to clear', 10, 20);
}

function draw() {
  background(255);
  
  stroke(0);
  strokeWeight(2);
  for (let i = 0; i < points.length - 1; i++) {
    line(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
  }

}

function mousePressed() {
  points.push({ x: mouseX, y: mouseY });
}

function keyPressed() {
  if (key === 'C' || key === 'c') {
    points = []; // Empty the array
    background(255); // Clear display
  }
}
