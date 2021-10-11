let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  text("beep will show up in console", width/ 2, height/2);


  //use the command "milli"? for accuracy?  not too sure what this is.


  timer++;
  if (timer >= 5*60){
    timer = 0;
    print ("beep");

  }

}
