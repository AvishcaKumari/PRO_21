var wall, bullet;
var speed , wieght, thickness;
var lbullet,lwall

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 5);
  car.velocityX = speed;
  car.shapeColor=color(255);

  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor=color(80,80,80);
 

  speed = random(223,321)
  wieght= random(30,52)
  thickness=random(1200, 200, thickness, height/2);
}

function draw() {
  background(0,0,0);  

  car.x=World.mouseX;
  car.y=World.mouseY;

  
if(wall.x-car.x < (car,width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * wieght * speed* speed/22500;
  if(deformation>100)
  {
     car.shapeColor=color(255,0,0);
  }

  if(deformation<100)
  {
     car.shapeColor=color(0,255,0);
  }
}
if(hasCollided(bullet,wall))
{
   bullet.velocityX=0;
   var damage=0.5 *weight* speed* speed/(thickness * thicknesss *thickness);

   if(damage>10)
   {
       wall.shapeColor=color(0,255,0);
   }
}

  drawSprites();
} 
function hasCollided(Lbullet, Lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEedge>=wallLeftEdge)
  {
     return true
  }
}