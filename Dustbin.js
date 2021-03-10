class Dustbin{
    constructor(x, y, width,height){
        var options= {
            'isStatic':false,
            'friction':1.0,
            'density':20
        }
        this.body=Bodies.rectangle(x,y,width, height, options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        fill("rgb(200, 0, 0)");
        stroke("rgb(200,0,0)");
        rectMode(CENTER)
        rect(pos.x, pos.y, this.width, this.height);
    }
}