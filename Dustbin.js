class Dustbin {
    constructor() {
        var options = {
            isStatic:false
        }
        this.rect1 = Bodies.rectangle(500,630.5,20,70,{isStatic:true} );
           World.add(world, this.rect1);
            
           
        this.rect2 = Bodies.rectangle(650,630.5,20,70,{isStatic:true} );
           World.add(world, this.rect2);
           

        this.rect3 = Bodies.rectangle(575,675,70,20,{isStatic:true} );
           World.add(world, this.rect3);
             
    }

    display() {
        fill("yellow");
        noStroke();
        rect(this.rect1.position.x,this.rect1.position.y,10,100);
        rect(this.rect2.position.x,this.rect2.position.y,10,100);
        rect(this.rect3.position.x,this.rect3.position.y,150,10);


}
}

