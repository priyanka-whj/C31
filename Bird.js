class Bird extends BaseClass
{
    constructor(x, y)
    {
        super(x, y, 50, 50); //calling the BaseClass (parent) constructor function
        this.image = loadImage("sprites/bird.png");
    }

    display()
    {
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;

        super.display() //display() function of the parent class is going to be called or invoked
    }
};