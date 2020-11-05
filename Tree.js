class Tree
{
    constructor(x, y)
    {
        this.x=x;
		this.y=y;
		this.treeWidth=450;
		this.treeHeight=300;
		this.angle=0;	
        this.image = loadImage("tree.png");
    }
    display()
    {
            image(this.image,this.treeWidth,this.treeHeight,400,400);
            push();
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255)
			pop(); 
			
    }
}
