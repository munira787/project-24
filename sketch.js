const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, iron;
var rubber, stone;
var ball1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);

    iron = new Iron(300, 350, 40, 50);
    rubber = new Rubber(900,350,60);
    stone = new Stone(725,350, 65, 65);

    ball1 = new Ball(510, 350, 10);
    ball2 = new Ball(512, 350, 10);
    ball3 = new Ball(514, 350, 10);
    ball4 = new Ball(516, 350, 10);
    ball5 = new Ball(518, 350, 10);
    ball6 = new Ball(520, 350, 10);
    ball7 = new Ball(522, 350, 10);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();
    rubber.display();
    stone.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display(); 
    ball5.display();
    ball6.display();
    ball7.display(); 
    
 
}