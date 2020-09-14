var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect.debug = true;

   console.log(fixedRect.width/2 + movingRect.width/2);
}

function draw() {
  background(2,25,25);  
  console.log(movingRect.x-fixedRect.x);
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(abs(movingRect.x-fixedRect.x) <= fixedRect.width/2 + movingRect.width/2 ){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}