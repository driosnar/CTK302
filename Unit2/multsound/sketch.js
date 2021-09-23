let song1, song2, song3;
let state = 0;

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
      state = 1;
      break;

    case 1:
      break;

    case 2:
      song2.play();
      background('blue');
      state = 3;
      break;

    case 3:
      break;

    case 4:
      song3.play();
      background('purple');
      state = 5;
      break;

    case 5:
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
