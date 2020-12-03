var rectangle1, rectangle2;


function setup() {
  createCanvas(400,400);
   rectangle1 = createSprite(200, 0, 50, 50);
   rectangle2 = createSprite(200, 400, 50, 50);
  rectangle1.shapeColor = "blue";
  rectangle2.shapeColor = "blue";
  
}

function draw() {
  background("black");  
   rectangle1.velocityY = 5;
   rectangle2.velocityY = -5;
   if(bounce(rectangle1, rectangle2)){
     rectangle1.velocityY = 5;
     rectangle2.velocityY = -5;
   }
  drawSprites();
}



