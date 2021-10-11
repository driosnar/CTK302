let state = 0;
let doggo;
let treat1;
let treat2;
let treat3;

function setup() {
  createCanvas(400, 400);


  doggo = loadImage("assets/doggo.png");
  treat1 = loadImage("assets/treat1.png");
  treat2 = loadImage("assets/treat2.png");
  treat3 = loadImage("assets/treat3.png");


}

function draw() {

  background(100);

  switch (state) {

    case 0:
    textSize(60);
      text("0", 300, 100);

      break;

    case 1:
      text("1", 300, 100);
      image(treat1, 300,100,100,100);
      break;

    case 2:
      text("2", 300, 100);
      image(treat1, 300,100,100,100);
      image(treat2, 300,130,100,100);
      break;
  }

  fill('red');
  //rect(100,100,100,100);
  image(doggo, 100,100,100,100);



}

function mouseReleased() {

  if((mouseX>100)&&(mouseX <200) && (mouseY>100)&&(mouseY<200)){


  state++;
  if (state > 2) state = 0;
}
}
