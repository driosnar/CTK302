let state = 0;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


  switch(state){


    case 0:
      background('red');
  for(var j = 0; j<height ; j +=20){
  for(var i = 0; i<width ; i+=20){
    // fill(random(255));
    rect(i,j,5,20);
  }
  }
    text("you played yourself", width/2,height/2);
    break;


    case 1:
      background('yellow');
  for(var j = 0; j<height ; j +=20){
  for(var i = 0; i<width ; i+=20){
    // fill(random(255));
    rect(i,j,20,5);
  }
  }
    text("you played yourself x1", width/2,height/2);
    break;

    case 2:
      background('orange');
  for(var j = 0; j<height ; j +=20){
  for(var i = 0; i<width ; i+=20){

    // fill(random(255));
    quad(i,j,width/2,height/2);
  }
  }
    text("you played yourself x2", width/2,height/2);
    break;

      case 3:
      background('green');

  for(var j = 0; j<height ; j +=20){
  for(var i = 0; i<width ; i+=20){

    // fill(random(255));
    fill(random(255),random(255),random(255))
    quad(00,j,0,i,i,400,j,400);
//    quad(i,i,250,10);

  }
  }
      fill('black')
      text("you played yourself x3", width/2,height/2);
    break;

      case 4:
      background('blue');

    for(var j = 0; j<height ; j +=20){
  for(var i = 0; i<width ; i+=20){
      fill(random(255),0,0);
  ellipse(j,200,i+100,j);
      text("you played yourself x4", width/2,height/2);
    break;
  }
  }
       }
}

function mouseReleased(){

  state = state +1;
  if (state > 4){
    state = 0;
  }
}
