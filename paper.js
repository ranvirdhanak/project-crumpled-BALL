class Paper {

    constructor(x,y,radius){
    
        var options={
            isStatic: false,
            restitution:1.3,
            friction:0.5,
            density:1.2
         
           }
    
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius
    
    World.add(world, this.body);
      
    }
        
    display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipseMode(RADIUS);
    strokeWeight(4);
    stroke("green");
    fill(255)
    ellipse(0,0, this.radius,this.radius);
    pop();
    
    
    
    }
    
    
    
    
}

    















































