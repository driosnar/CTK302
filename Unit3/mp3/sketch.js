let cars = [];
let frogPos;
let maxCars = 20;
let timer = 0;
let state = 0;
let score = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  // Spawn many object


  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 80);
}

function draw() {

  switch (state) {

    case 0:
      background('red');
      textSize(40);
      text("welcome", width / 2, height / 2)
      break;

      if (frogPos.x > windowWidth) frogPos.x = windowWidth;
      if (frogPos.x < 0) frogPos.x = 0;
      // if (frogPos.x > windowHeight) frogPos.x = windowHeight
      // if (frongPos.x <0) frogPos.x = 0;

    case 1: //game
      timer++;
      game();

      if(frogPos.length ==0){


        state =3

      }

      if (timer > 20 * 60) {
        timer = 0;
        state = 3;

      }
      if (score > 5) {
        state = 2
      }

      break;

    case 2: //win
      background("green");
      textSize(99);
      fill('yellow');
      text("winner", width / 2, height / 2);
      break;

    case 3: //lose
      background('black');
      textSize(28);
      text("you lost", width / 2, height / 2);
      break;
  }

//text(frogPosX + "," + frogPogY, 10, 1700);

}


function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 1:
      break;

    case 2:
      state = 0
      break;

    case 3:
      state = 0;
      break;
  }
}


function game() {
  background('grey');
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if ((cars[i].pos.dist(frogPos)) < 50) {
      cars.splice(i, 1);
      score++;
    }
  }
  if (cars.length == 0) {
    state = 2;
  }


  // frog
  fill("green");
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();
}

function resetTheGame() {
  timer = 0;
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 80);


}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 10;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 10;
  // if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  // if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

// Car class
class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(200, 200);
    this.vel = createVector(random(0, 0), random(10, 5));
    this.col = color(0, random(50, 100), random(100, 255), random(255));
    this.size = random(50, 80);
  }

  // methods

  display() {
    fill(this.col);
    textSize(this.size);
    text("HELLO", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
