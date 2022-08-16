
class Sorre {
    constructor(x, y, width, height) {
      var option = {isStatic : true
//set the static body(challenge 2)
      
      };
        //Load the image of the tower(challenge 5)
this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,this.weight,this.height,option)
      World.add(world,this.body)
      //211344664224663349902e332
    }
mostrar() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
            //change the rect as image(challenge 5)
            rect(0,0,this.width,this.height)
//display the rect function (challenge 3)
  pop();
  }
}

