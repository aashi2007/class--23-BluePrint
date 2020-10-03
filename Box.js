class Box
{
    constructor(x, y, width, height)
    {
        var options =
        {
         restitution: 0.8,
         friction: 0.3,
         density: 1.0,
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
         World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        //captures new settings
        push();
        //to change the 0 of axis to x and y position
        translate(pos.x,pos.y);
        //rotate and translate function change the angle and translation of entire game space
        rotate(angle);
        rectMode(CENTER);
        fill ("yellow");
        rect(0, 0, this.width, this.height);
        //reverts to the old settings 
        pop();      
    }
}     