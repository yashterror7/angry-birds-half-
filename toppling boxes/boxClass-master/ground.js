class Ground{
constructor(x,y,width,height){
var options={
isStatic:true

}

this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);

}
display(){
    var posi=this.body.position;
    fill("red");
    rectMode (CENTER);
    rect(posi.x,posi.y,this.width,this.height);
}

}