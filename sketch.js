const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var createCanvas, engine, world;

function preload(){

}

function setup(){
    createCanvas(1300, 600);

    engine=Engine.create();
    world=engine.world;

    ground=new Ground(650, 550, 1300, 25);
    paper=new Paper(250, 510, 25, 25);

    left=new Dustbin(800, 460, 20, 150);
    right=new Dustbin(1000, 460, 20, 150);
    bottom=new Dustbin(900, 530, 200, 20);

    Engine.update(engine);
}

function draw(){
    background(220);

    ground.display();
    paper.display();

    left.display();
    right.display();
    bottom.display();

    Engine.update(engine);
}

function keyPressed(){
    if (keyCode===UP_ARROW){
        Matter.Body.applyForce(paper.body, paper.body.position, {x:80,y:-150});
    }
}