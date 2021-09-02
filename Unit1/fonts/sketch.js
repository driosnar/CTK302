var f1;
var f2;
var f3;


function setup() {
  createCanvas(500, 500);

  f1 = loadFont("assets/BetterGrade.ttf");
  f2 = loadFont("assets/MetalLady.otf");
  textAlign (CENTER);
}

function draw() {
  background('red');
  textFont(f1);
  textSize(48);
  text("hello world",width/2, 100);


  textFont(f2);
  textSize(24);

  text("Metal Lady Font", width/2, 150);

  textFont(f3);
  textSize(24);
  text ("Zombie rebon font", width/2, 200)

}
