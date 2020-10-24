class Paper{
    constructor() {
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(200,70,10,options);
        this.radius = 10;
        World.add(world,this.body);
 }
 display() {
    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill(238,49,175);
    ellipse(pos.x,pos.y,this.radius);
 }
}


    

    
