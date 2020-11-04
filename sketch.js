
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paper,dustbin,ground;

function preload()
{
 
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(600,40,1200,40);
	dustbin = new Dustbin(); 
	Paper = new paper (1200,50,60,70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
 
}
function keyPressed(){
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});
    }
}


