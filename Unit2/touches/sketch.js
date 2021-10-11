let numberOfTouches;
let cat1;
let cat2;
let cat3;
let cat4;
let three;
function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);

  cat1 = loadImage("assets/cat1.png");
  cat2 = loadImage("assets/cat2.png");
  cat3 = loadImage("assets/cat3.png");
  cat4 = loadImage("assets/cat4.png");
  three = loadImage("assets/three.png");



}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch (numberOfTouches) {
    case 0:
      background(1,61,134);

      break;

    case 1:
    background(1,61,134);
    text("theres only 1", 5, 22);
    image(cat1, width / 2 +100, height / 2,200,200);


      // put a picture here
      break;

    case 2:
    background(1,61,134);
    text("now theres 2 of them", 5, 22);
    image(cat1, width / 2 +100, height / 2,200,200);
    image(cat2, width / 2 -100, height / 2,200,200);



      // put a picture here
      break;

    case 3:
    background(1,61,134);
    image(cat1, width / 2 +100, height / 2,200,200);
    image(cat2, width / 2 -100, height / 2,200,200);
    image(cat2, width / 2 + 75, height / 2+ 100,200,200);

    image(three, width / 2, 300,200,200);


      // put a picture here
      break;

    case 4:
    background(1,61,134);
    text("they keep populating", 5, 22);
    image(cat1, width / 2 +100, height / 2,200,200);
    image(cat2, width / 2 -100, height / 2,200,200);
    image(cat2, width / 2 + 75, height / 2+ 100,200,200);

    image(cat1, width / 2 -100, height / 2,200,200);
    image(cat2, width / 2 -100, height / 2+ 100,200,200);
    image(cat2, width / 2 - 75, height / 2+ 200,200,200);
      break;

    case 5:
      background('purple');
      text("theres too many of them!", 5, 22);

      image(cat1, width / 2 +100, height / 2,200,200);
      image(cat2, width / 2 -100, height / 2,200,200);
      image(cat2, width / 2 + 75, height / 2+ 100,200,200);

      image(cat1, width / 2 -100, height / 2,200,200);
      image(cat2, width / 2 -100, height / 2+ 100,200,200);
      image(cat2, width / 2 - 75, height / 2+ 200,200,200);

      image(cat1, width / 2 +50, height / 2,200,200);
      image(cat2, width / 2 -10, height / 2,200,200);
      image(cat2, width / 2 + 2, height / 2+ 50,200,200);

      image(cat1, width / 2 -60, height / 2,200,200);
      image(cat2, width / 2 +70, height / 2+ 100,200,200);
      image(cat2, width / 2 - 60, height / 2+ 200,200,200);

      break

    case 6:
      background('black');
      image(cat1, width/2+400,height/2-200, 2000,2000);
      break;


  }

}
