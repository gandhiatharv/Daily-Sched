var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup, reset, resetimg, gameover, gameoverimg;
var blanky;
//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  gameoverimg = loadImage("gameOver.png");
  resetimg = loadImage("reset.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,height/2);
path.addImage(pathImg);

strokeWeight = 2;
stroke("white");

//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
    
    gameover = createSprite(width/2, height/2-50);
  gameover.addImage(gameoverimg);
  gameover.scale = 0.8;
  reset = createSprite(width/2, height/2+50);
  reset.addImage(resetimg);
  reset.scale = 0.2;
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  if (treasureCollection>=2000){
    window.location.href = "level1end.html";
  }

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
    
            gameover.visible = false;
    reset.visible = false;
    path.velocityY = 15 + 3*treasureCollection/300;

  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 150;

      }
                if(swordGroup.isTouching(boy)) {
        gameState=END;
                }
  }else if (gameState === END){

        
        boy.visible = false;
        gameover.visible = true;
        reset.visible = true;
        path.velocityY = 0;

        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
    
          if (mousePressedOver(reset)) {
      resetgame();
      console.log("hello");
    }
  

  }
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection+"\nAVOID THE SWORDS, GOAL: COLLECT 2000",40,40);
  
}

function createCash() {
  if (World.frameCount % 100 == 0) {
  var cash = createSprite(Math.round(random(100, width-100),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = path.velocityY;
  cash.lifetime = 300;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 160 == 0) {
  var diamonds = createSprite(Math.round(random(100, width-100),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = path.velocityY;
  diamonds.lifetime = 300;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 205 == 0) {
  var jwellery = createSprite(Math.round(random(100, width-100),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = path.velocityY;
  jwellery.lifetime = 300;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (path.velocityY>=20){
    blanky=40
  } else{
  blanky=60-(path.velocityY)    
  }
  if (World.frameCount % blanky == 0) {
  var sword = createSprite(Math.round(random(100, width-100),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = path.velocityY;
  sword.lifetime = 300;
  swordGroup.add(sword);
  }
}

function resetgame() {
  gameState = PLAY;
  treasureCollection = 0;
  boy.visible = true;
}