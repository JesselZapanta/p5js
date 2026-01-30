function setup() {
 // put setup code here
  // createCanvas(h, w);
  createCanvas(400, 400);
  // background('white');//string 
  background(255);//grayscale 
  // background(255, 255, 255);//rgb 
}
// ---------------------------
function draw() {
  // put drawing code here
  // console.log('Hello from draw');
  stroke('blue');
  strokeWeight(5);
  // line(x1, y1, x2, y2);
  line(50, 50, 350, 350);
  line(350, 50, 50, 350);

  stroke('red');
  line(50, 50, 350, 50);
  line(350, 50, 350, 350);
  line(50, 350, 350, 350);
  line(50, 350, 50, 50);

  // point(x, y);
  strokeWeight(20);
  stroke(0);
  point(50,50)
}
