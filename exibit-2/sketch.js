function setup() {
  // put setup code here
  createCanvas(1000, 750);
  background('white');
}

function draw() {
  // put drawing code here

  noFill();
  strokeWeight(2);
  //wall sa door
  fill(200, 200, 200);
  beginShape();
  vertex(500, 600);
  vertex(500, 400);
  vertex(750, 400);
  vertex(750, 600);
  endShape(CLOSE);

  //garahe na wow
  fill(200, 200, 200);
  beginShape();
  vertex(500, 600);
  vertex(500, 400);
  vertex(275, 400);
  vertex(275, 600);
  endShape(CLOSE);

  //door sa garahe
  fill('lightgray');
  beginShape();
  vertex(335, 600);
  vertex(335, 450);
  vertex(485, 450);
  vertex(485, 600);
  endShape(CLOSE);

  fill('black');
  beginShape();
  vertex(325, 600);
  vertex(325, 440);
  vertex(485, 440);
  vertex(485, 450);
  vertex(335, 450);
  vertex(335, 600);
  endShape(CLOSE);

  line(335, 475, 485, 475);
  line(335, 500, 485, 500);
  line(335, 525, 485, 525);
  line(335, 550, 485, 550);
  line(335, 575, 485, 575);

  //syempre door ni
  fill(160, 84, 45);
  beginShape();
  vertex(640, 600);
  vertex(640, 475);
  vertex(720, 475);
  vertex(720, 600);
  endShape(CLOSE);

  fill('black');
  beginShape();
  vertex(630, 600);
  vertex(630, 465);
  vertex(720, 465);
  vertex(720, 475);
  vertex(640, 475);
  vertex(640, 600);
  endShape(CLOSE);

  fill('skyblue');
  beginShape();
  vertex(650, 490);
  vertex(675, 490);
  vertex(675, 545);
  vertex(650, 545);
  endShape(CLOSE);
  beginShape();
  vertex(685, 490);
  vertex(710, 490);
  vertex(710, 545);
  vertex(685, 545);
  endShape(CLOSE);
  beginShape();
  vertex(650, 585);
  vertex(650, 555);
  vertex(710, 555);
  vertex(710, 585);
  endShape(CLOSE);

  noFill();
  //second floor kay babaw
  fill(200, 200, 200);
  beginShape();
  vertex(500, 400);
  vertex(500, 200);
  vertex(750, 250);
  vertex(750, 400);
  endShape(CLOSE);
  //door knob
  ellipse(715, 550, 4);

  //atop na hiwi
  fill('black');
  beginShape();
  vertex(500, 200);
  vertex(475, 195);
  vertex(470, 170);
  vertex(785, 235);
  vertex(775, 255);
  endShape(CLOSE);

  //atop sa atop pagyud
  noFill();
  beginShape();
  vertex(470, 170);
  vertex(470, 160);
  vertex(790, 225);
  vertex(785, 235);
  endShape(CLOSE);

  //sun bathing
  beginShape();
  vertex(285, 400);
  vertex(285, 370);
  vertex(500, 370);
  vertex(500, 400);
  endShape(CLOSE);

  //para di mahulog ang bata
  line(306.5, 370, 306.5, 400);
  line(328, 370, 328, 400);
  line(349.5, 370, 349.5, 400);
  line(371, 370, 371, 400);
  line(392.5, 370, 392.5, 400);
  line(414, 370, 414, 400);
  line(435.5, 370, 435.5, 400);
  line(457, 370, 457, 400);
  line(478.5, 370, 478.5, 400);

  //windows 1
  fill('skyblue');
  beginShape();
  vertex(545, 475);
  vertex(610, 475);
  vertex(610, 535);
  vertex(545, 535);
  endShape(CLOSE);
  line(577.5, 475, 577.5, 535);

  //windowss 2
  beginShape();
  vertex(525, 335);
  vertex(525, 275);
  vertex(610, 275);
  vertex(610, 335);
  endShape(CLOSE);
  line(567.5, 335, 567.5, 275);

  //windows 3
  beginShape();
  vertex(640, 335);
  vertex(640, 275);
  vertex(725, 275);
  vertex(725, 335);
  endShape(CLOSE);
  line(682.5, 335, 682.5, 275);

}