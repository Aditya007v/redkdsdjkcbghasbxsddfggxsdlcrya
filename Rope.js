class Rope {
    constructor(bodyA,pointB){
        var options ={
            bodyA:bodyA,
            pointB:pointB,

            stiffness:1.0,
            length:150
        
        
        }
        this.pointB = pointB
    this.body = Constraint.create(options)


    World.add(world,this.body)


}
display(){
var pointA = this.body.bodyA.position
var pointB = this.pointB

push()
fill("yellow")
stroke ("yellow")
strokeWeight(2)
line(pointB.x,pointB.y,pointA.x,pointA.y)
pop()



}
}