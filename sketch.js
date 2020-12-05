const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,ball,rope,ground,box;

function setup(){
    createCanvas(700,400);
    
    engine = Engine.create();
    world = engine.world;
ball = new Ball(200,200,40,40);
rope = new Rope(ball.body,{x:200,y:100});
ground = new Ground(100,300,900,10);
box = new Box(300,200,40,30)
box1 = new Box(300,200,40,30)
box2 = new Box(300,200,40,30)
box3 = new Box(300,200,40,30)
box4 = new Box(300,200,40,30)
box5 = new Box(350,200,40,30)
}
function draw(){
    background(0)
Engine.update(engine)
ball.display();
rope.display();
ground.display();
box.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();



} 
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{
        x:mouseX,y:mouseY
    })
}