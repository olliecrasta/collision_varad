var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
 rect1 = createSprite(100,100,40,40);
 rect2  = createSprite(200,100,40,40);
 rect3  = createSprite(300,100,40,40);
 rect4  = createSprite(400,100,40,40);
 rect5  = createSprite(500,100,40,40);


  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  fixedRect.debug = true;
 
}



function draw() {
  background(2,25,25);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(isTouching(movingRect,rect2)) {
    movingRect.shapeColor ="yellow";
    rect2.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor ="orange";
    rect2.shapeColor = "orange";
  }

  drawSprites();
}

function isTouching(obj1,obj2){
 
  if((Math.abs(obj1.x - obj2.x) <= obj1.width/2 + obj2.width/2)&&(Math.abs(obj1.y - obj2.y) <= obj1.height/2 + obj2.height/2)){
    return true;
  }
  else{
   
    return false;
  }
}
