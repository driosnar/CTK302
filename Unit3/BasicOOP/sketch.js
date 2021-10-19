
let cars = [];
let watermelon;

function setup() {
  createCanvas(windowWidth, windowHeight);
watermelon = loadImage("assets/watermelon.png");
  // Spawn an object
  // myCar = new Car() ;

  for (let i = 0; i < 100; i++) {
    cars.push(new Car());
  }
}

function draw() {
  background('white');

  // myCar.display() ;
  // myCar.move() ;

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
  }
}

// Car class
class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(200), random(200));
    this.vel = createVector(random(5), random(5));
    this.cor = color(0, random(50, 100), random(190, 245), random(100));
    this.size = random(90) ;
  }

  // methods

  display() {
    fill(this.cor);
    // rect(this.pos.x, this.pos.y, 75, 25);
   textSize(this.size) ;
   image(watermelon, this.pos.x, this.pos.y);
    //text("RAIN", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
