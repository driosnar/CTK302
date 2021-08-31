var f1;
var f2;


function setup() {
  createCanvas(500, 500);

  f1 = loadFont("assets/BetterGrade.ttf");
  f2 = loadFont("assets/MetalLady.otf");
}

function draw() {
  background('red');
  textFont(f1);
  textSize(90);
  text("hello world", 100, 100);


  textFont(f2);
  
  text("hello world", 100, 150);

}
