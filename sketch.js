var trex;
var trex_running;
var ground, ground_image;
function preload(){
 trex_running=loadAnimation ("trex1.png", "trex3.png", "trex4.png");
 ground_image=loadImage ("ground2.png");
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex=createSprite (50, 160, 20, 50);
  trex.addAnimation ("running", trex_running);
  //adding scale and position to trex
  trex.x=50;
 trex.scale=0.5;
 //creating ground
 ground=createSprite (200,180,400,20);
 ground.addImage ("ground", ground_image);
}


function draw(){
  //set background color 
  background("gray");
  ground.velocityX=-2;
  if (ground.x<0) {
    ground.x=ground.width/2;
  }

  
  //jump when space key is pressed
  if (keyDown("space")) {
    trex.velocityY=-10;
  }
  //apply gravity to the trex
  trex.velocityY=trex.velocityY+0.8;
  //stop trex from falling down
  trex.collide(ground);
  drawSprites();
}