let x = 0;
let turtle;

function setup() {
  createCanvas(500, 500);

  turtle = loadImage("assets/turtle.png")
}

function draw() {

  background('grey');
  //fill('red');
  //rect(x, 100, 100, 100);
  image(turtle, x , 100, 100,100);

  x = x + .5;
  if (x > width) {
    x = 0;

  }
}
