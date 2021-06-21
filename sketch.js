const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg){
background(backgroundImg)

}

    Engine.update(engine);

    // write code to display time in correct format here
    textSize(28)
    strokeWeight(9)
    text("TIME:"+ hour,84,50)


}

async function getBackgroundImg(){

    // write code to fetch time from API
var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
var responceJson = await responce.json();
    // write code slice the datetime

 var dateTime = responceJson.datetime;

    // add conditions to change the background images from sunrise to sunset
 hour = dateTime.slice(11,13)

    if(hour>=5 && hour<6){
    bg="sunrise1.png"
    }
   else if(hour>=6 && hour<7){
    bg="sunrise2.png"
    }
   else if(hour>=7 && hour<8){
    bg="sunrise3.png"
    }
  else  if(hour>=8 && hour<9){
    bg="sunrise3.png"
    }
   else if(hour>=9 && hour<13){
    bg="sunrise4.png"
    }
   else if(hour>=13 && hour<16){
    bg="sunrise6.png"
    }
   else if(hour>=16 && hour<17){
    bg="sunset7.png"
    }
  else  if(hour>=17 && hour<18){
    bg="sunset8.png"
    }
   else if(hour>=18 && hour<19){
    bg="sunset9.png"
    }
  else  if(hour>=19 && hour<20){
    bg="sunset10.png"
    }
  else  if(hour>=20 && hour<24){
    bg="sunset11.png"
    }
    else{
    bg="sunset12.png"
    }


    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);

}
