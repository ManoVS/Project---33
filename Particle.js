class Particle {
    constructor(x, y) {

        var options ={
            restitution:0.4
        }
        this.radius=10;
      
        this.body = Bodies.circle(x, y, 10,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }

    getY(){
        return this.body.position.y
    }

    getX(){
        return this.body.position.x
    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius);
        pop();
    
    }
    
};