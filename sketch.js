var fixedRect;
var movingRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "pink";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "pink";
  //movingRect.debug = true;
  object1 = createSprite(100,100,50,50);
  object1.shapeColor = "blue";
  object2 = createSprite(200,100,50,50);
  object2.shapeColor = "blue";
  object3 = createSprite(300,100,50,50);
  object3.shapeColor = "blue";
  object4 = createSprite(400,100,50,50);
  object4.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  //console.log(movingRect.x-fixedRect.x);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,object1)){
    movingRect.shapeColor = "purple";
    object1.shapeColor = "purple";
  }
  else{
    movingRect.shapeColor = "pink";
    object1.shapeColor = "pink";
  }
  //isTouching();
  
  drawSprites();
}
function isTouching(obj1,obj2){
  if(obj1.x-obj2.x < obj2.width/2+obj1.width/2
    &&obj2.x - obj1.x < obj2.width/2+obj1.width/2
    &&obj1.y-obj2.y < obj2.height/2+obj1.height/2
    &&obj2.y - obj2.y <obj2.height/2+obj1.height/2
    ){
   return true;
  }else{
   return false;
  }
}