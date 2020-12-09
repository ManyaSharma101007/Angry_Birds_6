class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.tragectry = [];


  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    var position = [this.body.position.x,this.body.position.y];
    this.tragectry.push(position)

    for(var i = 0; i <= this.tragectry.length - 1; i++) {
      image(this.smoke,this.tragectry[i][0],this.tragectry[i][1]);
    }

    super.display();
  }
}
