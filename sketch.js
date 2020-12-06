var bg,marioS,brick;
var obsI,obs;
var ground,groundI;
function preload(){
  marioAn=loadAnimation("mario00.png","mario01.png","mario02.png","mario03.png")
  bgImage=loadImage("bg.png")
  
  obsI=loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png")
  
  groundI=loadImage("ground2.png");
  
  

}
function setup(){
  createCanvas(900,500)
  
  bg=createSprite(450,250,1000,500);
  bg.addAnimation("bg",bgImage)
  bg.scale=1.5;
  
  ground=createSprite(450,480,1000,20)
  ground.addImage("ground",groundI)
    
}
function draw(){
  background("lightblue")
  spawnObstacles();
  mario();
  drawSprites();
  
}
function mario(){
  marioS=createSprite(50,420,40,40)
  if(keyDown("space")){
    marioS.velocityY=-10;
  }
  marioS.velocityY=marioS.velocityY+0.5;
}
function spawnObstacles(){
  
  if(frameCount % 100 === 0) {
     obstacle = createSprite(1000,420,40,40);
    obstacle.velocityX=-2;
    obstacle.addAnimation("obs",obsI)
    
}
}
