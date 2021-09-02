let fish, turtle, bird ;

function setup() {
  createCanvas(500, 500);

  imageMode(CENTER);
  bird = loadImage("assets/bird.jpg");
  fish = loadImage("assets/fish.jpg");
  turtle = loadImage("assets/turtle.jpg");
}

function draw() {
background ('blue');

image(bird , width/2, height/2, 100 ,100);
image(fish , width/2, height/2-120, 100, 100);
image(turtle , width/2, height/2+120, 100, 100);

}
