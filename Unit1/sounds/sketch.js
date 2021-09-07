let song1;

function preload() {

  song1= loadSound("assets/duck.mp3");

}

function setup(){
  createCanvas(720, 400);
  background('green');
  song1.loop();
}


function draw() {
  background('green');

}

function mouseReleased(){
  if(song1.isPlaying()){
    song1.pause();
  } else{song1.loop();
  }
}

function touchStarted() {
  getAudioContext().resume();
}
