function Drop(){
  this.x = random(width);
  this.y = random(height);
  this.z = random(0,20);
  this.length = map(this.z,0,20,10,20);
  this.xspeed = map(this.z,0,20,0,0.3);
  this.yspeed = map(this.z,0,20,0,0.3);
  this.thickness = map(this.z, 0, 20, 1, 4);
  this.fall = function(){
    var mouseposx = map(mouseX,0,width,-2,2);
    var mouseposy = map(mouseY,0,height,-2,2);
    this.x += this.xspeed * mouseposx;
    this.y += this.yspeed * mouseposy;
    if(this.y>height+50){
      this.y = -50;
    }
    if(this.y<-50){
      this.y = height + 50;
    }
    if(this.x>width + 50){
      this.x = -50;
    }
    if(this.x<-50){
      this.x = width + 50;
    }
  }
  this.display = function(){
    strokeWeight(this.thickness);
    stroke(0,15);
    rect(this.x,this.y,this.length, this.length);
  }
}
