class Paper{
    constructor(x, y, radius){
        var options={
            'isStatic':false,
            'density':1.2, 
            'restitution': 0.0
        }
        this.body=Bodies.circle(x, y, radius, options);
        this.radius=radius;
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        fill("rgb(0,100,255)");
        stroke("rgb(0,100,255)");
        ellipseMode(RADIUS)
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}