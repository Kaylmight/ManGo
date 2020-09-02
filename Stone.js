class Stone{
    constructor(x,y,w,h){
      var options = {
        isStatic:false,
        restitution: 0.4,
        density:1.2
        
      }
      
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        this.image = loadImage('stone.png')
        
        World.add(world, this.body);
    }
      
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     imageMode(CENTER)
      image(this.image, 0, 0, this.width, this.height)
      pop()
      
    }
}
