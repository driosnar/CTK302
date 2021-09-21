let state = 0;
let timer = 0;
let joke;

function setup() {
  createCanvas(500, 500);
  imageMode(CENTER);
  joke = loadImage("assets/funnyjoke.png");
}

function draw() {
  switch (state) {

          case 0:
            background('white');
            textSize(20);
            text("What do you call a Mexican \n who got their car stole?", 100,100);
            break;

          case 1:
            background('yellow');
            textSize(20);
            text("Carlos", 100,100);
            image(joke, 400,400,200,200);
            break;
  }
  timer ++;
  if (timer> 3*60){
    timer = 0
    state++;
    if (state > 1){
      state = 0 ;
    }

  }
}

function mouseReleased(){
  state++;

  if (state>1){
    state = 0;
  }
}
