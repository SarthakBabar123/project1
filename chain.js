class Chain{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.01,
            length: 30
        }
        this.Chain = Constraint.create(options);

        World.add(world, this.Chain);
        console.log(this.Chain);
    }
    fly(){
        this.Chain.bodyA = null;
       
    }
    display(){
        if(this.Chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    
}