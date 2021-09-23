let state = 0;
let timer = 0;
let x = 0;
let car;
let vel = 0;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  noStroke();
  imageMode(CENTER);
  car = loadImage("assets/car.png");
}

function draw() {
  background(100);
  fill('orange');
  rect(width / 2, height / 2, 200, 600);

  switch (state) {
    case 0: //red
      fill('red');
      ellipse(width / 2, height / 2 - 180, 150, 150);
      fill(61,59,8);
      ellipse(width / 2, height / 2, 150, 150);
      fill(32,61,8);
      ellipse(width / 2, height / 2 + 180, 150, 150);
      vel = 0;
      break;

    case 1: //green
      fill(61,8,8);
      ellipse(width / 2, height / 2 - 180, 150, 150);
      fill(61,59,8);
      ellipse(width / 2, height / 2, 150, 150);
      fill('green');
      ellipse(width / 2, height / 2 + 180, 150, 150);
      vel = 10;
      break;

    case 2: //yellow
      fill(61,8,8);
      ellipse(width / 2, height / 2 - 180, 150, 150);
      fill('yellow');
      ellipse(width / 2, height / 2, 150, 150);
      fill(32,61,8);
      ellipse(width / 2, height / 2 + 180, 150, 150);
      vel = 5;
      break;

  }

  timer++;
  if (timer > 3 * 60) {
    timer = 0;
    state++;
    if (state > 2) {
      state = 0;
    }
  }

  //fill('purple');
  //rect(x, height-100,100,50)
  image(car, x, height - 100, 100, 50)
  x = x + vel;
  if (x > width) {
    x = 0;
  }
}
// function mouseReleased(){
//   state++;
//
//   if (state>2){
//     state = 0;
//   }
//
// }
