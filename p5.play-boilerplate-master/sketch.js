const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var ground,base,slingshot,box1,box2,box3,box4,box5,box6,box7,box8,box9
var Canvas















function setup() {
  
  var Canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

ground = new Ground(600,380,1200,20)
base = new Ground (350,350,50,20)
//leevl two
box1 = new Box(330,235,30,40)
console.log(box1)
box2 = new Box(360,235,30,40)
box3 = new Box(390,235,30,40)
box4 = new Box(420,235,30,40)
box5 = new Box(450,235,30,40)
//level three
box6 = new Box(360,195,30,40)
box7 = new Box(390,195,30,40)
box8 = new Box(420,195,30,40)
//top
box9 = new Box(390,155,30,40)









}

function draw() {
  background(100);
  Engine.update(engine)
    ground.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    base.display()








  drawSprites();
}