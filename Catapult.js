class Catapult {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
       this.string1 = loadImage("sprites/string1.png");
       this.string2 = loadImage("sprites/string2.png");
       this.string3 = loadImage("sprites/string3.png");
        this.pointB = pointB
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }
    
    fly(){
        this.string.bodyA = null;
    }

    display(){
    image(this.string1,200,20)
    image(this.string2,170,20)
        if(this.string3.bodyA){
            var pointA = this.string.bodyA.position;
            var pointB = this.pointB;
            push();
          if(pointA.x<200){
            strokeWeight(7);
            stroke(76,13,15)
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
      line(pointA.x-25,pointA.y,pointB.x+30,pointB.y)
      image(this.string3,pointA.x-25,pointB.y-10,15,30)
        }
        else{
            strokeWeight(3);
            stroke(76,13,15)
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
      line(pointA.x-25,pointA.y,pointB.x+30,pointB.y)
      image(this.string3,pointA.x-25,pointB.y-10,15,30) 
      Pop();
        }
        }
    }
    
}