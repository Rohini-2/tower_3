class Polygon{
    constructor(x, y, radius) {
       var options = {
           'restitution':0.8,
           'friction':1.0,
           'density':1.0
       }
       this.polygon = Bodies.circle(x,y,radius,options);
      this.radius = radius
      this.image=loadImage("sprites/ploygon.png")
       World.add(world, this.polygon);

    }
   display(){
    push()
    translate(this.polygon.position.x, this.polygon.position.y)
    rotate(this.polygon.angle)
    imageMode(RADIUS)
    image(this.image,0,0,this.radius,this.radius)

   pop()
   }
  };
  