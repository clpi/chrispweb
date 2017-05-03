function Particle(x,y,fore){
  this.fore = fore;
  this.pos = createVector(x, y);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.maxvel = 3;
  this.maxforce = 0.2;
  this.r = map(this.fore, foreLowerBound,foreUpperBound,50,90); //objects in foreground have greater radius
  this.m = map(this.fore, foreLowerBound,foreUpperBound,3,1); //objects in foreground have less mass
  this.display = function(){
    ellipseMode(RADIUS);
    ellipse(this.pos.x,this.pos.y,this.r,this.r);
    //debugging
    //text(this.pos.x, this.pos.x, this.pos.y);
    //text(this.pos.y, this.pos.x, this.pos.y+20);
    //Can't get mouse over to work
    //if(this.mousedOver()){
      //fill(255,this.fore+50);
      //stroke(0,this.fore-5);
    //}else{
      fill(255,this.fore);
      stroke(0,this.fore-55);
    //}
  }
  this.applyForce = function(force){
    var f = p5.Vector.div(force,this.m);
    this.acc.add(f);
  }
  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxvel);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.bounds = {
      left: this.pos.x - this.r,
      bottom: this.pos.y - this.r,
      right: this.pos.x + this.r,
      bottom: this.pos.y + this.r
    }
  }
  this.wrap = function() {
    if (this.pos.x> width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r){
      this.pos.y = height + this.r;
    }
  }
  this.mousedOver = function(){
    if(dist(mouseX,mouseY,this.pos.x,this.pos.y)<this.r){
      return true;
    }else{
      return false;
    }
  }
}
