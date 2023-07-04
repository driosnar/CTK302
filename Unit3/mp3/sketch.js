let cars = [];
let frogPos;
let maxCars = 5;
let timer = 0;
let state = 0;
let score = 0;
// let life = [];
let life = 3;
let start;
let backgrnd;
let ship;
let rock;
let winner;


function setup() {
  createCanvas(1080, 720);
  imageMode(CENTER);
  textAlign(CENTER);

  start = loadImage("assets/start.png");
  backgrnd = loadImage("assets/background.png");
  ship = loadImage("assets/ship2.png");
  rock = loadImage("assets/rock.png");
  winner = loadImage("assets/winner.png");

  // Spawn many objects


  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }



  frogPos = createVector(width / 2, height - 80);
}

function draw() {

  switch (state) {

    case 0:
  //    background('red');
      image(start, width / 2, height / 2)
      //textSize(40);
    //  fill(0);
      //text("welcome", width / 2, height / 2)
      break;


      // if (frogPos.x > windowHeight) frogPos.x = windowHeight
      // if (frongPos.x <0) frogPos.x = 0;

    case 1: //game
      image(backgrnd, width / 2, height / 2);
      timer++;
      game();

      // if (frogPos.length == 0) {
      //
      //
      //   state = 3
      //
      // }

      if (timer > 20 * 60) {
        timer = 0;
        state = 2;

      }
      // // if (life < 0) {
      //   state = 3
      // }

      // if (life > 0) {
      //   state = 3;
      // }

      break;

    case 2: //win

      image(winner, width / 2, height / 2);
      // background("green");
      // textSize(99);
      // fill('yellow');
      // text("winner", width / 2, height / 2);
      break;

    case 3: //lose
      background('black');
      textSize(28);
      text("WHAT HAPPENED!? \n \n Y.O.U: You happened, you were too lazy to drive the ship yourself", width / 2, height / 2);
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
      resetTheGame();
      state = 0
      break;

    case 3:
      resetTheGame();
      state = 0;
      break;
  }
}


function game() {
  //background('grey');
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if ((cars[i].pos.dist(frogPos)) < cars[i].size / 2) {
      cars.splice(i, 1);
      life--;
      // score++;
    }
  }

  //   if ((life[i].pos.dist(frogPos)) < 50) {
  //     life.splice(i, -1);
  // }

  if (life <= 0) {
    state = 3;
  }


  // frog
  fill("green");
  image(ship, frogPos.x, frogPos.y,100,100);
  checkForKeys();

  fill('white');

  textSize(90);
  //fill(156,32,53);
  text(life, 950, 80);
}

function resetTheGame() {
  life = 3;
  score = 0;
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
  if (frogPos.x > 1080) frogPos.x = 1080;
  if (frogPos.x < 0) frogPos.x = 0;
  // if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  // if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

// Car class
class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), 200);
    this.vel = createVector(random(0, 0), random(10, 5));
    this.col = color(0, random(50, 100), random(100, 255), random(255));
    this.size = random(50, 80);
  }

  // methods

  display() {
    //fill(this.col);
    //textSize(this.size);
    image(rock,this.pos.x, this.pos.y, this.size, this.size);
    //text("HELLO", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = random(0, 1080);
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.pos.x = random(0, 1080)
    }
    if (this.pos.y < 0) this.pos.y = height;
  }
}

// class Life {
//   constructor() {
//     this.pos = createVector(1000, 20);
//     this.col = ('red');
//     this.size = (15);
//   }
//
//
//   // methods
//
//   display() {
//     fill(this.col);
//     textSize(this.size);
//     ellipse(1000,80, 100, 100);
//   }
// }
