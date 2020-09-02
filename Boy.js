class Boy{
    constructor(body1, point2){
        
var option={
    bodyA:body1,
    pointB:point2,
    length:10,
    stiffness:0.04,
 }
 
 this.sling = Constraint.create(option);
    World.add(world, this.sling);
    this.point2 = point2
    this.boy = loadImage("boy.png")
}
 display(){
    image(this.boy, 250, 550, 200, 300)
    if(this.sling.bodyA != null){

        var posA = this.sling.bodyA.position;
        var posB = this.point2;
        push();
        var anchor1X = posA.x;
        var anchor1Y = posA.y;
        
        strokeWeight(10)
        line(anchor1X, anchor1Y, posB.x, posB.y);
        
        pop();
    }  
}
   
   fly(){
    this.sling.bodyA = null

}
attach(body){
   this.sling.bodyA = body
}
}

   
