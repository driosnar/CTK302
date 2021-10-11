var vol;
let m1;
let m2;
let m3;
let song1;
let state = 0;
let x = 0;
let vel = 0

let chara1;
let chara2;
let chara3;
let chara4;
let colorback;
let dj;
let speakers;
let background;
let visor;
let special;
let visorless;
let crowd;
let sun;
let table;
let rd;
let blu;
let analyzer;
let music;
let buildup;
let rms;

function preload() {
  song1 = loadSound("assets/samplebeat.mp3");
  buildup = loadSound("assets/djsound.mp4");
  music = loadSound("assets/djmusic.mp4");

  song1.play();
  buildup.play();
  music.play();



  song1.pause();
  buildup.pause();
  music.pause();
}


function setup() {
  createCanvas(1800, 1800);
  song.loop();
  imageMode(CENTER);
  ellipseMode(CENTER);
  m1 = loadImage("assets/m1.png");
  m2 = loadImage("assets/m2.png");
  m3 = loadImage("assets/m3.png");


  chara1 = loadImage("assets/chara1.png");
  chara2 = loadImage("assets/chara2.png");
  chara3 = loadImage("assets/chara3.png");
  chara4 = loadImage("assets/chara4.png");
  colorback = loadImage("assets/colorback.png");
  dj = loadImage("assets/DJ.png");
  speakers = loadImage("assets/speakers.png");
  backgrn = loadImage("assets/backgrn.png");

  visor = loadImage("assets/visor.png");
  special = loadImage("assets/special.png");
  visorless = loadImage("assets/visorless.png");

  crowd = loadImage("assets/crowd.png");
  sun = loadImage("assets/sun.png");
  table = loadImage("assets/table.png");
  rd = loadImage("assets/red.png");
  blu = loadImage("assets/blue.png");

  analyzer = new p5.Amplitude();
  //analyzer.setInput(song1);
  analyzer.setInput(buildup);


}

function draw() {

  //vol = (song1.play());
  //if (vol > .20){}


  switch (state) {

    case 0:
      state = 1;
      song1.play();
      //repeat for "song list"
      break;

    case 1:
      //button
      //image(m1, width / 2, height / 2);

      // let rms = analyzer.getLevel();
      // fill(127);
      // stroke(0);

      //image(colorback, width / 2, height / 2);
      //image(backgrn, width / 2, height / 2);
      image(visor, width / 2, height / 2);

      fill(183, 14, 231);
      text("Press the button", x + 700, height / 2 - 440, 100);

      //tint (255, 0);

      image(special, width / 2, height / 2);
      //  square(width / 2, height / 2, 400 + rms * 200);

      image(speakers, width / 2, height / 2);
      //image(chara1, width / 2, height / 2);
      image(visorless, width / 2, height / 2);
      image(dj, width / 2, height / 2);

      //image(dj, vol * 75, width/2,height/2);


      fill('blue');
      rect(width / 2, height / 2 + 400, 350, 300);

      fill('black');
      textSize(60);
      text("When's the \n concert?", width / 2, height / 2 + 400, 600, 600);


      vel = 3;
      x = x + vel;
      if (x > width) {
        x = 650;
      }



      break;



    case 2:

      //song 2 play
      buildup.play();
      state = 3
      break;

    case 3:
      rms = analyzer.getLevel();
      fill(104, 107, 132);
      stroke(0);

      //image(m2, width / 2, height / 2);

      //image(colorback, width / 2, height / 2);
      image(backgrn, width / 2, height / 2);



      image(speakers, width / 2, height / 2);
      //tint(255,130);
      ellipse(186, 700, 100 + rms * 350);
      ellipse(186, 1333, 100 + rms * 350);
      ellipse(1616, 700, 100 + rms * 350);
      ellipse(1616, 1333, 100 + rms * 350);

      image(chara2, width / 2, height / 2);
      image(dj, width / 2, height / 2);

      break;

    case 4:
      //song 3
      music.play();
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

      //image(m1, width / 2, height / 2);
      image(rd, width / 2, height / 2);
      image(blu, width / 2, height / 2);

      //tint(255,127);

      image(sun, width / 2, x + 800);

      image(crowd, width / 2, height / 2);
      image(table, width / 2, height / 2);
      image(chara4, width / 2, height / 2);



      vel = 1;
      x = x + vel;
      if (x > height) {
        x = 1;
      }


      textSize(75);
      fill('red');
      //text("THIS IS THE END OF THE PROJECT ART \n BUT IT IS NOT DONE", width / 2, height / 2, 600, 600);
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
  buildup.pause();
  music.pause();
  //song 2
  //song 3
  if (state == 1) {
    if ((mouseX > 900) && (mouseX < 1250) && (mouseY > 1300) && (mouseY < 1600)) {
      state = 2;
    }
  } else {
    state++;
  }

  if (state > 8) {
    state = 0;
  }
}
// }
