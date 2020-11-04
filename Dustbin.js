class Dustbin {
    constructor(){
        var options ={
            'isStatic': true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    
    }
    display(){
      rect(50,50,100,200);
      rect(80,80,200,100);
      rect(100,100,300,200);   

    }
}