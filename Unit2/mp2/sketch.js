var vol;
let m1;
let m2;
let m3;
let song1;
let state = 0;

let chara1;
let chara2;
let chara3;
let colorback;
let dj;
let speakers;
let background;

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


  chara1 = loadImage("assets/chara1.png");
  chara2 = loadImage("assets/chara2.png");
  chara3 = loadImage("assets/chara3.png");
  colorback = loadImage("assets/colorback.png");
  dj = loadImage("assets/DJ.png");
  speakers = loadImage("assets/speakers.png");
  backgrn = loadImage("assets/backgrn.png");

}

function draw() {
  switch (state) {

    case 0:
      state = 1;
      song1.play();
      //repeat for "song list"
      break;

    case 1:
      //button
      //image(m1, width / 2, height / 2);


      //image(colorback, width / 2, height / 2);
      image(backgrn, width / 2, height / 2);
      image(speakers, width / 2, height / 2);
      image(chara1, width / 2, height / 2);
      image(dj, width / 2, height / 2);


      fill('blue');
      rect(width / 2, height / 2 + 400, 350, 300);

      fill('black');
      textSize(60);
      text("When's the \n concert?", width / 2, height / 2 + 400, 600, 600);


      break;

    case 2:

      //song 2 play
      state = 3
      break;

    case 3:
      //image(m2, width / 2, height / 2);

      //image(colorback, width / 2, height / 2);
      image(backgrn, width / 2, height / 2);
      image(speakers, width / 2, height / 2);
      image(chara2, width / 2, height / 2);
      image(dj, width / 2, height / 2);

      break;

    case 4:
      //song 3
      state = 4
      break;

    case 5:
      //image(m3, width / 2, height / 2);

      //image(colorback, width / 2, height / 2);
      image(backgrn, width / 2, height / 2);
      image(speakers, width / 2, height / 2);
      image(dj, width / 2, height / 2);
      image(chara3, width / 2, height / 2);

      break;

    case 6:
      //song 4?
      state = 7;
      break;


    case 7:
      //background("red");

      image(m1, width/2,height/2);
      textSize(75);
      fill('red');
        text("THIS IS THE END OF THE PROJECT ART \n BUT IT IS NOT DONE", width / 2, height / 2, 600, 600);
      break;

  }
  // textSize(100);
  // fill('purple');
  // text(mouseX + "," + mouseY, 10, 1700);

}

function mouseReleased() {
  // if((mouseX>100)&&(mouseX <200) && (mouseY>100)&&(mouseY<200))
  // {
  song1.pause();
  //song 2
  //song 3
  if (state == 1) {
    if ((mouseX > 900) && (mouseX < 1250) && (mouseY > 1300) && (mouseY < 1600)) {
      state = 2;
    }
  } else {
    state++;
  }

  if (state > 8)
    state = 0;
}
// }
