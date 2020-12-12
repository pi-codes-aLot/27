class glue{
    constructor(bodyA, bodyB,){
        var options ={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.05,
            length: 10
        
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
        var p = this.chain.bodyA.position
        var s = this.chain.bodyB.position
        push();
        strokeWeight(4);
        line(p.x, p.y, s.x, s.y);
        pop();
    }
}