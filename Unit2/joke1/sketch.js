let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {

    case 0:
      background('white');
      textSize(20);
      text("What kind of car does Yoda drive? ",100,100);
      break;

    case 1:
      background('yellow');
      textSize(20);
      text("A toYODA",100,100);
      break;


}

function mouseReleased(){
  state++;

  if (state>3){
    state = 0;
  }
}
