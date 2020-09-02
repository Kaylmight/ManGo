class Tree{
  constructor(x,y,w,h){
    var option ={
      
      isStatic:true
    }
    
      this.body = Bodies.rectangle(x, y, w, h, option);
      this.width = w;
      this.height = h;
      this.image = loadImage('tree.png')
      
      World.add(world, this.body);
      
  }
    
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
   
   imageMode(CENTER)
    image(this.image, pos.x, pos.y, this.width, this.height)
   
    
  }
}
