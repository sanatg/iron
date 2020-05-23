class Toppling extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,40,height,angle);  
    this.visibility = 225
    Matter.Body.setAngle(this.body, angle);
   }
   display(){
   
    console.log(this.body.speed)
     
     if(this.body.speed>12){
      push();
      this.visibility = this.visibility-5
     tint(255,this.visibility);
    //image(this.body.position.x,this.body.position.y,50,50)
      World.remove(world,this.body)
      pop();
     }
     else{
      super.display();
     }
   }
}