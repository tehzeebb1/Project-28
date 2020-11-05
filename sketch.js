
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg, boy;
var tree1;
var stone1;
var shot1;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 tree1 = new Tree (140, 380);
 stone1 = new Stone (150, 380, 5);
 
 mango1 = new Mango (640, 420, 30);
 mango2 = new Mango (710, 400, 30);
 mango3 = new Mango (770, 435, 30);
 mango4 = new Mango (690, 370, 30);
 mango5 = new Mango (600, 470, 30);

 shot1 = new Shot(stone1.body,{x:140, y:380});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  image (boyImg, 100, 340, 200, 300);

  tree1.display();
 stone1.display();

 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();

 shot1.display();

 detectCollision(stone1, mango1);
 detectCollision(stone1, mango5);
 detectCollision(stone1, mango4);
 detectCollision(stone1, mango3);
 detectCollision(stone1, mango2);



  drawSprites();
 
}

//Matter.Body.applyForce(stone1[stone1.length-1].stone1,stone1[stone1.length-1].body.position ,{x: 5 , y: -5});


function mouseDragged()
{
  Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY})
}
function mouseReleased()
{
    shot1.fly();
}

function detectCollision(stone0, mango0)
{
  mangoBodyPosition=mango0.body.position;
  stoneBodyPosition=stone0.body.position;

  var distince = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distince<=mango0.r+stone0.r)
  {
    Matter.Body.setStatic(mango0.body,false);
  }
}

function keyPressed()
{
  if (keyCode === 32)
  {
    Matter.Body.setPosition(stone1.body, {x:150, y:380})
    shot1.attach(stone1.body)
  }
}

