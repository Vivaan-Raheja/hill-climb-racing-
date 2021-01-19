class Car {
    constructor(x,y){
        var options={restitution:0.2,friction:0.1,isStatic:false}
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        this.width=225;
        this.height=150;
        this.image=loadImage("images/4.png")
        World.add(world,this.body)
    }
display(){
    var pos= this.body.position 
    var angle = this.body.angle
    push();
    //translate(this.body.position.x,this.body.position.y);
    //rotate(angle);
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    pop();

}
}