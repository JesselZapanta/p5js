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
  // line(x1, y1, x2, y2);
  line(100, 50, 300, 250);
  line(300, 50, 100, 250);

  stroke('red');
  strokeWeight(5);
  line(100, 50, 300, 50);
  line(300, 50, 300, 250);
  line(100, 250, 300, 250);
  line(100, 250, 100, 50);
}
