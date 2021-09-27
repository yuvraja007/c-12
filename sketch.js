var Runner 1 , path, Runner 2,coin;
function preload(){
 
  Runner=loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg=loadImage("path.png");
  coinImg=loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(path.png);
  path.velocityY=5;
  path.y=path.height/30;
  Runner =createSprite(180,340,50,170);
  Runner.addAnimation("running",Runner-1.png,Runner-2.png);
  path =createSprite(200,80,100,100);
  path.addImage(path.png);
  coin=createSprite(200,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(100,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(300,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
  background(0);
  textSize(10);
  text('coin Score', 1,200);
  textSize(10);
  text('0', 20,230);
  path.velocityY=5;
  Runner.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;
  if(Runner.isTouching(coin)) {
  coinscore = coinscore+1;
 }
  
}
  Runner-1,Runner-2.collide(left_boundary);
  Runner-1,Runner-2 .collide(right_boundary);
  edges=createEdgeSprites();
  Runner-1,Runner-2.collide(edges[3]);
drawSprites();
}

