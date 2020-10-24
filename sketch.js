
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground=Bodies.rectangle(400,690,400,10,{isStatic:true});
	World.add(world,ground);

	

	ball = new Paper(200,70);

	fill("green");
	ground = new Ground(400,680,800,20);
	
	dustbin = new Dustbin();

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

	ball.display();
	ground.display();
	dustbin.display();

  drawSprites();

}

function keyPressed() {
	
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:13,y:-13});
	
}
}
