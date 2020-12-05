var bg,bgImage;
var groundImage,ground;
var mario,marioAn;
var obstacleAn,obstacle,obstacleGroup;
var gameState='PLAY';
function preload(){
  marioAlive=loadAnimation("mario00.png","mario01.png","mario02.png","mario03.png");
  bgImage=loadImage("bg.png");
  groundImage=loadImage('ground.png');
  marioDead=loadAnimation('collided.png');
  obstacleAn=loadAnimation('obstacle1.png','obstacle2.png','obstacle3.png','obstacle4.png');
  

}
function setup(){
  createCanvas(800,400)
  
  bg=createSprite(450,250,900,500);
  bg.addAnimation("bg",bgImage)
  bg.scale=1.6;
  
  
  mario=createSprite(50,300,10,100);
mario.addAnimation('alive',marioAlive);
 mario.addAnimation('dead',marioDead);
  ground=createSprite(450,380,900,50);
  ground.addImage(groundImage);
  ground.velocityX=-2;
    
  obstacleGroup=new Group();
}
function draw(){
  background("lightblue")
  if(gameState==='PLAY'){
  
  if(keyDown('space')){
    mario.velocityY=-12;
  }
  
  mario.velocityY=mario.velocityY+0.8; 
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(mario.isTouching(obstacleGroup)){
   gameState='END';
  }
  mario.collide(ground);
  }
  if(gameState==='END')
    {
     mario.velocityY=0;
    ground.velocityX=0;
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
                  mario.changeAnimation('dead',marioDead);
  
    }
  drawSprites();
  spawnObstacles();
}
function spawnObstacles(){
  if(frameCount%120===0){
    obstacle=createSprite(800,330,20,20);
  obstacle.addAnimation('anim',obstacleAn);
    obstacle.velocityX=-2;
    obstacle.lifetime=400;
    obstacleGroup.add(obstacle);
       
    
  }
}
