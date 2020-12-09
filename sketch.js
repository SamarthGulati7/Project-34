
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;

var sling1,sling2,sling3,sling4,sling5;
var mConstraint;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth/2,windowHeight/2);


	engine = Engine.create();
	world = engine.world;

	let canvasmouse= Matter.Mouse.create();
	canvasmouse.pixelRatio = pixelDensity();

	let options = {

    mouse: canvasmouse

	}
	
	mConstraint = MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

	pendulum1= new Pendulum(200,400,"red");
	pendulum2= new Pendulum(300,400,"red");
	pendulum3= new Pendulum(400,400,"red");
	pendulum4= new Pendulum(500,400,"red");
	pendulum5= new Pendulum(600,400,"red");

	sling1= new Sling(pendulum1.body,{x: 200, y: 100});
	sling2= new Sling(pendulum2.body,{x: 300, y: 100});
	sling3= new Sling(pendulum3.body,{x: 400, y: 100});
	sling4= new Sling(pendulum4.body,{x: 500, y: 100});
	sling5= new Sling(pendulum5.body,{x: 600, y: 100});
}


function draw() {
  background(0);

  Engine.update(engine);
  
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  drawSprites();
}

function mouseDragged(){

Matter.Body.setPosition(pendulum1.body,{x: mouseX,y: mouseY});

}


