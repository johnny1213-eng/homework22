const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine;
var ground,ball;

function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world;
var options={
  isStatic:true

}
ground=Bodies.rectangle(200,390,200,20,options);
console.log(ground);
World.add(world,ground);
console.log(ground.position.x);
console.log(ground.position.y);
var ball_options={
  restitution:2.0

}
ball=Bodies.circle(200,100,20,ball_options);

World.add(world,ball);

}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

  rect(ground.position.x,ground.position.y,400,20);
  
  drawSprites();
}