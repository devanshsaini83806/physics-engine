class ground{
    constructor(x,y,width,height){
    var g_options ={
          isStatic:true
    }

    this.body=Bodies.rectangle(x,y,width,height,g_options)
    this.width=width;
    this.height=height;

    World.add(world,this.body);
}
display(){
    var pos1=this.body.postion;
    push();
    
    fill("yellow");
    rectMode(CENTER);
    rect(200,380,this.width,this.height);
    pop();
    }
}