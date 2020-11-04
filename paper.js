class paper {
    constructor(x,y,width,height){
        var options = {
            'restitution':0.3,
            'friction': 0.5, 
            'denstiy':1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
        this.image = loadImage("TrashImage.png");
    }

    display(){
        image(this,image,0,0,this.width,this.height);    }
}