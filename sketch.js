var fixedRect,movingRect;

var object1,object2;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 30, 80);
  movingRect=createSprite(600,200,80,30);

  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";

  object1=createSprite(0,350,50,50);
  object2=createSprite(800,350,50,50);

  object1.velocityX=3;
  object2.velocityX=-3;
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY; 

  if(fixedRect.width/2+movingRect.width/2>movingRect.x-fixedRect.x &&
    fixedRect.width/2+movingRect.width/2>fixedRect.x-movingRect.x &&
    fixedRect.height/2+movingRect.height/2>movingRect.y-fixedRect.y &&
    fixedRect.height/2+movingRect.height/2>fixedRect.y-movingRect.y){
    fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  }
  else{
    fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
  }

  if(object1.width/2+object2.width/2>object1.x-object2.x &&
    object1.width/2+object2.width/2>object2.x-object1.x){
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }

  if(object1.height/2+object2.height/2>object1.y-object2.y &&
    object1.height/2+object2.height/2>object2.y-object1.y){
      object1.velocityY=object1.velocityY*(-1);
      object2.velocityY=object2.velocityY*(-1);
    }  

  drawSprites();
}