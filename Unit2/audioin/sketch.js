var mic;
var vol;
var c = 'green';
let x = 0 ;
let music;
let band;
let music2;
let sheet;


function setup() {
  createCanvas(400, 400);


  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();

  music = loadImage("assets/music.png");
  band = loadImage("assets/band.jpg");
  music2 = loadImage("assets/music2.png");
  sheet = loadImage("assets/sheet.png");
}


function draw() {


  background(c);
  image(band,-10,0);
  image(sheet,0,100,350,250);
  // get the sound input
  vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .20) { // if the volume is LOUD?
    // do something

    c = color(random(255), random(255), random(255)); // here I'm setting the background to a random color
  }

  // extra stuff for debugging
  textSize(18);
  text("practice man " + vol, 10, 60);

  image(music, vol * 300, 100, 50, 50);
  image(music2, vol * 75, 200, 50, 50);

//   rect(vol * 300, 150, 50, 50);

//   x = map(vol, 0, .2, 0, width) ;
//   rect(x, 200, 50, 50);

}
