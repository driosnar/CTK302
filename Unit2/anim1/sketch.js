let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  background('grey');
  fill('red');
  rect(x, 100, 100, 100);

  x = x + .5;
  if (x > width) {
    x = 0;

  }
}
