const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground;
var engine, world;
var box1;
var box2,box3,box4,box5;
var pig1,pig2;
var log,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,375,2000,30);
    box1 = new Box(700,350,70,70);
    box2 = new Box(900,350,70,70);
    pig1 = new Pig(800,350);
    log = new  Log(800,320,300,PI/2);
    box3 = new Box(700,240,70,70);
    box4 = new Box(900,240,70,70);
    pig2 = new Pig(800,280);
    log2 = new Log(800,180,300,PI/2);
    box5 = new Box(800,160,70,70);
    log3 = new Log(750,140,150,PI/7);
    log4 = new Log(869,140,150,PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    ground.display();
    log.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
}
