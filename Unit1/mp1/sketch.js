let shot1, shot2, song1;

function preload(){
  song1= loadSound ("assets/gunsound_1.mp3");
}


function setup() {
  createCanvas(1000, 800);
  imageMode(CENTER);
  rectMode(CENTER);
  // quadMode(CENTER);
  ellipseMode(CENTER);
  shot1 = loadImage("assets/shot1.png");
  shot2 = loadImage("assets/shot2.png");
  song1.loop();

}



function draw() {

  background(100);





  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
//quad(0,0,640,0,640,475,0,475);


image(shot2 , width/2, height/2, 1000 ,800);
  } else {
    // when the mouse isn't pressed!



fill('black');
quad(60,30,950,30,950,730,60,730);

fill('white');
quad(65,35,945,35,945,725,65,725);

fill(40,38,38);
quad(65,35,640,35,640,475,65,475);

line(640,325,950,325);
line(640,385,950,385);
stroke(12);

fill(47,50,93);
quad(640,35,945,35,945,325,640,325);

fill('red');
quad(640,35,700,35,700,325,640,325);
fill('blue');
quad(740,90,860,90,860,325,740,325);
fill('yellow');
quad(815,170,930,170,930,325,815,325);
fill('green');
quad(930,120,945,120,945,325,930,325);


//image(shot1 , width/2, height/2, 1000,800);
  }

  // this shows mouse location - comment it out when you're done!
  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);
  text("story \n and \"stories\"", 10,10);

}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
