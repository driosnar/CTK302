// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
let fl;
let cloud;

// var temp = 0;
// var humid = 0;
// var desc;


function setup() {
  createCanvas(400, 400);
  fl  = loadImage("assets/florida.png");
  cloud = loadImage("assets/cloud.png");

  imageMode(CENTER);

  // HERE is the call to get the weather.

  var myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Tampa,FL,US&units=imperial&";

  //You can also use "zipcode" - var myIDString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = "appid=0deba5c1d1575e7ccc72749462a4ddea"; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;

  // temp = weather.main.temp;
  // humid = weather.main.humidity;
  // desc = weather.weather[0].description;


}

function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:

      background(200);
      image(fl, width/2-170,height/2);
      fill("black");
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("bruh its like windspeed is " + windspeed, 20, 40);

      text("look at that, its " + weather.main.temp, 20,60);
      text("but they tell me it feels like " + weather.main.feels_like,20,80);
      text("yeah " + weather.weather[0].description,20,100);

      // text("temperature is " + temp, 20, 160);
      // text("humidity is " + humid, 20, 180);
      // text("description is " + desc, 20, 200);


      // cloud
      fill("white");
      noStroke();
      image(cloud, x, 130, 200, 100);
      image(cloud, x+1, 210, 200, 100);
      image(cloud, x+random(1,50), 200, 100, 100);
      image(cloud, x, 150, 150, 100);
      image(cloud, x, 100, 175, 100);

      // move the cloud's x position
      x = x + windspeed;
      if (x > width) x = 0;

      break;
  }
}
