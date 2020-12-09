class Pendulum{

    constructor(x,y,color){
    
    var options= {
     
      restitution: 1,
      friction: 0,
      frictionAir: 0,
      slop: 1,
      inertia:Infinity
    
    }
    
    this.body = Bodies.rectangle(x,y,100,100,options);
    
    this.color=color;
    
    World.add(world,this.body);
    
    }
    display(){
    
    var angle= this.body.angle;

    push();
    rotate(angle);
    translate(this.body.position.x,this.body.position.y);
    fill(this.color);
    ellipse(0,0,100,100);
    pop();
    
    }
    };
    