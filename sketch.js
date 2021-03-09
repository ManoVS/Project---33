const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

const Div1Score = 500;
const Div2Score = 500;
const Div3Score = 500;
const Div4Score = 500;
const Div5Score = 100;
const Div6Score = 100;
const Div7Score = 100;
const Div8Score = 200;
const Div9Score = 200;
const Div10Score =200;


var engine, world;
var ground;
var cols = 10;
var rows = 9;

var particle;
var particleActive = false;
var plinkos = [];
var divisions = [];

var gameState = 0;
var Play = 1;
var End = 2; 

var counter = 5;

var score = 0;

var divisionHeight = 300; 

function setup() {
  createCanvas(500,800);
  engine = Engine.create();
  world = engine.world;

  var spacing = width / cols;
  for(var j = 0; j < rows; j++){
    for(var i = 0; i < cols; i++){
      var x = i * spacing;
      if(j % 2 == 0){
        x += spacing / 2;
      }
      var y = spacing + j * spacing;
      var p = new Plinko(x,y,4);
      plinkos.push(p);
    }
  }

  for(var i = 0; i < cols; i++){
    var x = i * spacing;
    var h = 300;
    var w = 5;
    var y = height - h/2;
    var b = new Ground(x,y,w,h);
    divisions.push(b);
  }

  
  
}

function draw() {
  background(0); 
  gameState = Play;

  Engine.update(engine);

  for(var i = 0; i < cols; i++){
    divisions[i].display();
  }

  for (var r = 0; r < plinkos.length; r++){
    plinkos[r].display();
  }


  
  if(mouseIsPressed){
    mousePressed();
  }

  if(particleActive){
    particle.display();
    if(particle.getY() > 800){
      World.remove(world,particle);
      particleActive = false;
      if(counter === 0){
        gameState = End;
        strokeWeight(3);
        stroke(255,0,0);
        fill(255,0,0);
        textSize(80);
        text("GameOver",100,400);
        particleActive = true;
        World.remove(world,particle);
      }
    }
    //from here
    if(particle.getX() > -20 && particle.getX() < 48 && particle.getY() > 800){
      score = score + Div1Score;
    }
    if(particle.getX() > 48 && particle.getX < 98 && particle.getY() > 800){
      score = score + Div2Score;
    }
    if(particle.getX() > 98 && particle.getX < 148 && particle.getY() > 800){
      score = score + Div3Score;
    }
    if(particle.getX() > 148 && particle.getX < 198 && particle.getY() > 800){
      score = score + Div4Score;
    }
    if(particle.getX() > 198 && particle.getX < 246 && particle.getY() > 800){
      score = score + Div5Score;
    }
    if(particle.getX() > 246 && particle.getX < 300 && particle.getY() > 800){
      score = score + Div6Score;
    }
    if(particle.getX() > 300 && particle.getX < 348 && particle.getY() > 800){
      score = score + Div7Score;
    }
    if(particle.getX() > 348 && particle.getX < 398 && particle.getY() > 800){
      score = score + Div8Score;
    }
    if(particle.getX() > 398 && particle.getX < 450 && particle.getY() > 800){
      score = score + Div9Score;
    }
    if(particle.getX() > 450 && particle.getX < 550 && particle.getY() > 800){
      score = score + Div10Score;
    }
  }

  console.log(mouseX)
  drawSprites();

  //500
  fill(255);
  textSize(20);
  text(Div1Score,10,500);

  textSize(20);
  text(Div2Score,60,500);

  textSize(20);
  text(Div3Score,110,500);

  textSize(20);
  text(Div4Score,160,500);

  //100

  textSize(20);
  text(Div5Score,210,500);

  textSize(20);
  text(Div6Score,260,500);

  textSize(20);
  text(Div7Score,310,500);

 // 200

  textSize(20);
  text(Div8Score,360,500);

  textSize(20);
  text(Div9Score,410,500);

  textSize(20);
  text(Div10Score,460,500);

// score and balls left
  textSize(30);
  text("Score : " + score, 250, 30);

  noStroke();
  textSize(30);
  text("Balls left : " + counter,30,30);
}

function mousePressed(){
  if(gameState != End && !particleActive){
    particle = new Particle(mouseX,10,10,10);
    particleActive = true;
    counter = counter - 1;
   }
  //particles[particles.length - 1].display();

}