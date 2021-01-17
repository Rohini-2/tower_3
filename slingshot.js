class SlingShot {
    constructor(body1, point1) {
        var options = {
            bodyA: body1,
            pointB: point1,
            length: 10,
            stiffness: 0.1,

        }
        this.sling = Constraint.create(options)
        World.add(world, this.sling)
        
        
    }
    display() {
        if (this.sling.bodyA) {
            var p1 = this.sling.bodyA.position
            var p2 = this.sling.pointB
          
       
            stroke(48, 22, 8)
            if (this.sling.bodyA.position.x < 220) {
                strokeWeight(7)
                line(p1.x - 20, p1.y, p2.x + 30, p2.y)
                line(p1.x - 20, p1.y, p2.x - 20, p2.y)
               
            }
            else {
                strokeWeight(3)
                line(p1.x + 20, p1.y, p2.x + 30, p2.y)
                line(p1.x + 20, p1.y, p2.x - 20, p2.y)
               

            }


        }
    }
    fly() {
        this.sling.bodyA = null
    }
    attach(b1) {
        this.sling.bodyA = b1
    }

}