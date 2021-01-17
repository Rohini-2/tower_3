class Block{
    constructor(x, y, width, height) {
       var options = {
           'restitution':0.8,
           'friction':1.0,
           'density':1.0
       }
       this.block = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world, this.block);
     
       this.visibility = 255;
    }
   display(){
    if (this.body.speed < 3) {
        super.display();
      }
      else {
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 5;
        tint(255, this.visibility)
        image(this.image, this.body.position.x, this.body.position.y, 50, 50)
        pop();
      }
  
    }
    score(){
      if(this.visibility<0 && this.visibility>-100) {
        score=score+20
      } 
    }
  };