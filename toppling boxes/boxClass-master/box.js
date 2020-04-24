class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.3,
        'density':1.4
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    angleMode(RADIANS);
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(5);
    stroke("black");
    rectMode(CENTER);
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
