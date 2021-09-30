var vol;
let m1;
let m2;
let m3;
let song1;
let state = 0;
function preload() {
  song1 = loadSound("assets/samplebeat.mp3");

  song1.play();
  song1.pause();
}


function setup() {
  createCanvas(1800, 1800);
  imageMode(CENTER);
  m1 = loadImage("assets/m1.png");
  m2 = loadImage("assets/m2.png");
  m3 = loadImage("assets/m3.png");

}

function draw() {
  switch (state) {

    case 0:
      //button
      image(m1, width / 2, height / 2);

      fill('blue');
      rect(width / 2, height / 2 + 400, 350, 300);

      fill('black');
      text("When's the concert?", width / 2, height / 2 + 400, 600, 600);
      song1.play();
      
      break;

    case 1:
      image(m2, width / 2, height / 2);

      break;

    case 2:
      image(m3, width / 2, height / 2);

      break;

    case 3:
      background('red');
      break;

  }

}

function mouseReleased() {
  // if((mouseX>100)&&(mouseX <200) && (mouseY>100)&&(mouseY<200))
  // {
  song1.pause();
  state++;

  if (state > 3)
    state = 0;
}
// }
