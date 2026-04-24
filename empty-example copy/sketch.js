let points = [];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  fill(0);
  textSize(16);
  text('Left click: draw red  |  Right click: draw blue', 20, 30);

  // redraw all stored circles/ 60 - per second
  for (let p of points) {
    fill(p.color);
    circle(p.x, p.y, 30);
  }
}

function mousePressed() {
  // LEFT click
  if (mouseButton === LEFT) {
    points.push({ x: mouseX, y: mouseY, color: [255, 0, 0] });
  }

  // RIGHT click
  if (mouseButton === RIGHT) {
    points.push({ x: mouseX, y: mouseY, color: [0, 0, 255] });
  }

  return false; // prevents right-click menu
}
