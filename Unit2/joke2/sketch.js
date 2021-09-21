let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
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
