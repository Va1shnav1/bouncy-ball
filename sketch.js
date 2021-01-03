const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine, world;
var bird;
var ground;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  bird = Bodies.circle(200, 200, 30, {restitution:1});
  World.add(world, bird);

  ground = Bodies.rectangle(400, 380, 800, 20, {isStatic:true});
  World.add(world, ground);
}

function draw() {
  Engine.update(engine);
  background(0);  
  fill("blue");
  ellipseMode(RADIUS)
  ellipse(bird.position.x, bird.position.y, 30, 30);
  
  fill("green");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);
}