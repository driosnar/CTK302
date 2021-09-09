let shot1, shot2, shot3, body1, song1;

function preload() {
  song1 = loadSound("assets/gunsound_1.mp3");
}


function setup() {
  createCanvas(1000, 800);
  imageMode(CENTER);
  rectMode(CENTER);
  // quadMode(CENTER);
  ellipseMode(CENTER);
  shot1 = loadImage("assets/shot1.png");
  shot2 = loadImage("assets/shot2.png");
  shot3 = loadImage("assets/shooting.png");
  body1 = loadImage("assets/body.png");
  // song1.loop();

}

function mousePressed() {
  print('hello');
  song1.play();
}

function draw() {

  background(100);





  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    //quad(0,0,640,0,640,475,0,475);
    //song1.loop();
    // print("hello");
    // image(shot3 , width/2, height/2, 1000 ,800);

    fill('black');
    quad(20, 60, 715, 60, 715, 550, 20, 550);
    fill(47, 50, 93);
    quad(25, 65, 710, 65, 710, 545, 25, 545);

    fill('black');
    quad(445, 330, 985, 330, 985, 770, 445, 770);
    // fill('white');
    // quad(450,335,980,335,980,765,450,765);

    //gun
    fill('black');
    quad(20, 260, 300, 260, 295, 315, 20, 315);
    quad(110, 250, 290, 250, 320, 300, 110, 290);
    quad(100, 315, 250, 315, 250, 440, 130, 420);
    quad(245, 410, 322, 280, 375, 305, 285, 460);
    quad(300, 265, 330, 260, 340, 270, 320, 280);

    // jacket
    quad(375, 300, 580, 270, 650, 400, 440, 495);
    quad(400, 435, 375, 300, 490, 350, 440, 495);
    quad(580, 270, 710, 185, 710, 338, 484, 405);

    //cover
    quad(297, 265, 322, 279, 254, 413, 154, 295);
    quad(573, 269, 580, 261, 594, 270, 572, 281);

    //hand
    quad(397, 410, 376, 305, 248, 410, 315, 480);
    quad(333, 455, 353, 473, 382, 444, 363, 415);

      text("\"Pl-please... You don't have to do this!\" \n The shadowy man did not think of anything.  The city fell quite listening to the man's wheeps and it felt like its holding \n it breath witnessing the horror \n \n \"there are no more heros anymore\" the shadowy man said.  His voice had no emotion, it sounded dead \n  \"only butchers under the facade\"   \n \n \"You Either Die A Hero, Or You Live Long Enough To See Yourself Become The Villain\"" , 42.5, 80);
    // image(shot3 , width/2, height/2, 1000 ,800);
    image(shot3, width / 2, height / 2, 1000, 800);
  } else {
    // when the mouse isn't pressed!



    fill('black');
    quad(60, 30, 950, 30, 950, 730, 60, 730);

    fill(63,63,69);
    quad(65, 35, 945, 35, 945, 725, 65, 725);

    fill(40, 38, 38);
    quad(65, 35, 640, 35, 640, 475, 65, 475);

    line(640, 325, 950, 325);
    line(640, 385, 950, 385);
    stroke(12);

    fill(47, 50, 93);
    quad(640, 35, 945, 35, 945, 325, 640, 325);

    fill(48,29,73);
    quad(640, 35, 700, 35, 700, 325, 640, 325);
    fill(36,12,65);
    quad(740, 90, 860, 90, 860, 325, 740, 325);
    fill(48,29,73);
    quad(815, 170, 930, 170, 930, 325, 815, 325);
    fill(12,14,65);
    quad(930, 120, 945, 120, 945, 325, 930, 325);

    //head

    fill('black');
    quad(824, 98, 824, 144, 870, 141, 873, 98);
    quad(834, 142, 834, 166, 869, 168, 860, 142);
    ellipse(849, 100, 51, 38);
    quad(825, 143, 836, 152, 849, 156, 829, 124);
    quad(869, 142, 852, 149, 849, 138, 865, 130);
    //man
    fill(0, 0, 0);
    quad(804, 169, 825, 235, 878, 236, 875, 160);
    quad(825, 235, 879, 246, 909, 370, 789, 370);
    quad(822, 400, 870, 400, 884, 354, 821, 354);
    quad(788, 370, 821, 414, 826, 380, 800, 340);
    quad(908, 370, 881, 414, 863, 334, 908, 370);
    quad(888, 285, 997, 212, 882, 307, 872, 281);
    quad(825, 235, 812, 252, 818, 270, 829, 264);
    quad(826, 219, 826, 260, 870, 260, 870, 219);
    quad(832, 149, 820, 165, 834, 173, 846, 156);

    //left
    quad(800, 363, 798, 475, 817, 478, 836, 370);
    quad(798, 473, 794, 501, 826, 501, 815, 477);
    quad(793, 501, 798, 505, 828, 505, 828, 493);
    quad(806, 168, 785, 225, 803, 250, 821, 221);
    quad(785, 225, 803, 250, 766, 288, 736, 269);
    quad(737, 267, 716, 287, 746, 287, 753, 278);
    quad(716, 285, 750, 287, 760, 325, 717, 325);
    quad(718, 317, 718, 375, 728, 375, 728, 317);
    //right
    quad(864, 380, 884, 462, 902, 459, 893, 356);
    quad(885, 461, 886, 479, 915, 483, 902, 458);
    quad(885, 461, 878, 485, 916, 486, 915, 482);
    quad(874, 159, 894, 168, 895, 289, 854, 264);
    quad(877, 486, 916, 484, 918, 496, 880, 498);

      text("A poor man ran away from a shadow. He ran up the roof and fell over looking behind him. \n and \He crawled on the ground trying to get away from the figure.  The shadow watched quitely\ \n and began to lift something from its arm", 70, 50);
    image(body1, width / 2, height / 2, 1000, 800);
  }

  // this shows mouse location - comment it out when you're done!
  fill(0);
//  text(mouseX + ", " + mouseY, 40, 40);
  // text("A poor man ran away from a shadow. He ran up the roof and fell over looking behind him. \n and \He crawled on the ground trying to get away from the figure.  The shadow watched quitely\ \n and began to lift something from its arm\"", 70, 50);

}






// record the mouse location in console when clicked
// function mouseReleased() {
//   print(mouseX + ", " + mouseY);
// }
