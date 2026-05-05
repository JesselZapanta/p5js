function setup() {
  createCanvas(1400, 1400);
  angleMode(DEGREES);
 // put setup code here
}

function draw() {
  background('black');
  // put drawing code here

  translate(700, 700);
  let s = frameCount * 1;
  noFill();
  strokeWeight(5);


  push();
  stroke('red');
  rotate(s);
  ellipse(50, 0, 100, 100);
  pop();

  push();
  stroke('orange');
  rotate(s);
  ellipse(75, 0, 200, 200);
  pop();

  push();
  stroke('yellow');
  rotate(s);
  ellipse(100, 0, 300, 300);
  pop();

  push();
  stroke('green');
  rotate(s);
  ellipse(125, 0, 400, 400);
  pop();

  push();
  stroke('blue');
  rotate(s);
  ellipse(150, 0, 500, 500);
  pop();

  push();
  stroke('indigo');
  rotate(s);
  ellipse(175, 0, 600, 600);
  pop();

  push();
  stroke('violet');
  rotate(s);
  ellipse(200, 0, 700, 700);
  pop();

}