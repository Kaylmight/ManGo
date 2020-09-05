class Mango{
    constructor(x,y,w,h){
      var option ={
          isStatic: true,
        restitution:0,
        friction:1
      }
      
        this.body = Bodies.circle(x, y, 50, option);
        this.radius = 50 ;
        this.image = loadImage('mango.png')
        
        World.add(world, this.body);
        
    }
      
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
push();
      translate(pos.x, pos.y)
      rotate(angle)
     imageMode(CENTER)
      image(this.image, 0, 0, this.radius, this.radius)
 pop();      
      
    }
  }
  