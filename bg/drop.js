function Drop(){
  this.x = random(width);
  this.y = random(height);
  this.z = random(0,20);
  this.length = map(this.z,0,20,10,35);
  this.xspeed = map(this.z,0,20,0.1,0.4);
  this.yspeed = map(this.z,0,20,0,0.3);
  this.thickness = map(this.z, 0, 20, 1,4);
  this.opacity = map(this.z,0,20,20,60);
  this.fall = function(){
    var mouseposx = map(mouseX,0,width,-2,2);
    var mouseposy = map(mouseY,0,height,-2,2);
    this.x += this.xspeed * mouseposx;
    this.y += this.yspeed * mouseposy;
    if(this.y>height+5){
      this.y = -5;
    }
    if(this.y<-5){
      this.y = height + 5;
    }
    if(this.x>width + 5){
      this.x = -5;
    }
    if(this.x<-5){
      this.x = width + 5;
    }
  }
  this.display = function(){
    strokeWeight(this.thickness);
    stroke(0,this.opacity);
    point(this.x,this.y);
  }
}
