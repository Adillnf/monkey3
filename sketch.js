var PLAY = 0;
var END = 0;
var gamestate = PLAY;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var obstacleGroup;
var ground;
var survivaletime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(600,300);
  
  monkey = createSprite(100,265);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,295,2000,7);
  ground.velocityX = -3;
  ground.x = ground.width/2;
  
  bananaGroup   = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background(250);
  
  
  
  if(gamestate === PLAY){
    
    
    if(monkey.isTouching(bananaGroup)){
      bananaGroup.destroyEach();
      survivaletime = survivaletime + 2;
    }
    
    if(monkey.isTouching(obstacleGroup)){
       obstacleGroup.setVelocityXEach(0);
       bananaGroup.setVelocityXEach(0);
       monkey.velocityX = 0;
      
  
      
    }
    
    
    stroke("white");
    textSize(20);
    fill("white");
    text("Score: "+ score, 200,50);
    
    stroke("black");
    textSize(20);
    fill("black");
    survivaltime = Math.ceil(frameCount/frameRate());
    text("Survival Time: "+ survivaletime,100,50);
    

  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
     monkey.velocityY = -12;
  }
     if(monkey.isTouching(obstacleGroup)){
    monkey.velocityX = 0;
    bananaGroup.velocityX = -0;
    obstacleGroup.velocityX = -0;
  }
  
    
 
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
    
  
}
  
    
    
  
  
  if(monkey.isTouching(obstacleGroup)){
    monkey.velocityX = 0;
    bananaGroup.velocityX = -0;
    obstacleGroup.velocityX = -0;
  }
  
 spawnbanana();
  
 spawnobstacle();
  
  drawSprites();
}

function spawnbanana() {
  
     if (frameCount % 80 === 0) {
    banana = createSprite(600,200,40,10);
    banana.y = Math.round(random(100,60));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifeTime = 300;
       
    bananaGroup.add(banana);
  
}
}

function spawnobstacle() {
   if (frameCount % 60 === 0){
   var obstacle = createSprite(600,260,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.2;
   obstacle.velocityX = -6;
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
     
   
    //assign scale and lifetime to the obstacle           
  
    obstacle.lifeTime = 300;
     
     obstacleGroup.add(obstacle);
   
   //add each obstacle to the group
    
 }
}






