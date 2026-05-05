function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
  // put setup code here
}

function draw() {
  background('skyblue');

  push();
  strokeWeight(0);
  beginShape();
  vertex(0, 500);
  vertex(700, 500);
  vertex(700, 700);
  vertex(0, 700);
  endShape(CLOSE);
  push();

  push();
  translate(350, 350);

  push();
  noFill();
  strokeWeight(7);
  circle(0, 0, 450);
  pop();

  push();
  let l = frameCount * 1;
  rotate(l);

  strokeWeight(5);
  line(0, 0, 225, 0);
  line(0, 0, 0, 225);
  line(0, 0, -225, 0);
  line(0, 0, 0, -225);
  line(0, 0, 160, -155);
  line(0, 0, -160, 155);
  line(0, 0, 160, 155);
  line(0, 0, -160, -155);


  push();
  //rotate (l);
  translate(0, -225);
  rotate(-l);
  fill('pink');
  rect(-25, -5, 50, 60, 10);
  pop();

  push();
  // rotate (l);
  translate(-225, 0);
  rotate(-l);
  fill('cyan');
  rect(-25, -5, 50, 60, 10);
  pop();

  push();
  // rotate (l);
  translate(0, 225);
  rotate(-l);
  fill('orange');
  rect(-25, -5, 50, 60, 10);
  pop();

  push();
  //rotate(l);
  translate(225, 0);
  rotate(-l);
  fill('violet');
  rect(-25, -5, 50, 60, 10)
  pop();

  push();
  //rotate(l);
  translate(-160, 160);
  rotate(-l);
  fill('brown');
  rect(-25, -5, 50, 60, 10);
  pop();

  push();
  //rotate (l);
  translate(160, -160);
  rotate(-l);
  fill('red');
  rect(-25, -5, 50, 60, 10);
  pop();

  push();
  //rotate(l);
  translate(160, 160);
  rotate(-l);
  fill('green');
  rect(-25, -5, 50, 60, 10);
  pop();

  push();
  //rotate(l);
  translate(-160, -160);
  rotate(-l);
  fill('yellow');
  rect(-25, -5, 50, 60, 10)
  pop();
  pop();

  fill('green');
  strokeWeight(10);
  circle(0, 0, 50);
  line(0, 0, 200, 700);
  line(0, 0, -200, 700);


}