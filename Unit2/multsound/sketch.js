let song1, song2, song3;
let state = 0;
let doggo;
let jackson;
let guitar;
let green;
let rms;

function preload() {

  song1 = loadSound("assets/thrill.mp3");
  song2 = loadSound("assets/skate.mp3");
  song3 = loadSound("assets/donkey.mp3");

  song1.play();
  song2.play();
  song3.play();

  song1.pause();
  song2.pause();
  song3.pause();
}

function setup() {
  createCanvas(500, 500);

  jackson = loadImage("assets/jackson.png");
  doggo = loadImage("assets/doggo.png");
  green = loadImage("assets/green.png");
  guitar =loadImage("assets/guitar.png");


  analyzer = new p5.Amplitude();
  //analyzer.setInput(song1);
  analyzer.setInput(song1);
//  analyzer.setInput(song2);
  //analyzer.setInput(song3);

}

// function mouseReleased() {
//   print('hello');
//   song1.play();
//   song2.pause();
//
//   if(song1.isPlaying()){
//     song1.pause();
//     song2.play();
//   }
//}

function draw() {

  switch (state) {
    case 0:

      background('red');


      song1.play();


      //image(jackson, 50,50, 200 + rms * 100,200 + rms * 100);
      //ellipse(100,100, 100 + rms* 100);


      state = 1;
      break;

    case 1:
    rms = analyzer.getLevel();

    image(jackson, 50,50, 200 + rms * 300,);

      break;

    case 2:

      background('blue');


      song2.play();

      state = 3;
      break;

    case 3:
    rms = analyzer.getLevel();

//  image(jackson, 50,50, 200 + rms * 300,);

    image(guitar, 50,50, 200+ rms * 300);

      break;

    case 4:

      background('white');

      song3.play();

      state = 5;
      break;

    case 5:


    image(doggo, 50,50, 100 + rms * 100,100 + rms * 100);
    image(green, 200,50, 100 + rms * 100,100 + rms * 100);
      break;


  }

}

function mouseReleased() {
  song1.pause();
  song2.pause();
  song3.pause();
  state++;

  if (state > 6) {
    state = 0;
  }
}
