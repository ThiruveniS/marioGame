var bg,ground,mario,brick;
function preload(){
  marioAn=loadAnimation("mario00.png","mario01.png","mario02.png","mario03.png")
  bgImage=loadImage("bg.png")
  

}
function setup(){
  createCanvas(900,500)
  
  bg=createSprite(450,250,1000,500);
  bg.addAnimation("bg",bgImage)
  bg.scale=1.5;
    
}
function draw(){
  background("lightblue")
  
  drawSprites();
  
}