const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var torre;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}


function setup() {
  canvas = createCanvas(1200,600);
  torre = new Sorre(150,350,160,310)
  engine = Engine.create();
  world = engine.world;



  rectMode(CENTER);
  ellipseMode(RADIUS);
  //Usa una nueva palabra clave para crear un objeto torre.(desafío 4)
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
//muestra la torre(desafío 4)
torre.mostrar(); 
}

