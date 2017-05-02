function Particle(x,y,r,m){
  this.r = r;
  this.m = m;
  this.pos = createVector(x, y);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.maxvel = 3;
  this.maxforce = 0.2;
  this.opacity = random(60,80);

  this.display = function(){
    // if(this.mousedOver()){
    //   ellipse(this.pos.x,this.pos.y,this.r,this.r).fill(255,this.opacity + 50).stroke(0,this.opacity-5);
    // }else{
    //   ellipse(this.pos.x,this.pos.y,this.r,this.r).fill(255,this.opacity).stroke(0,this.opacity-55);
    // }
    ellipse(this.pos.x,this.pos.y,this.r,this.r).fill(255,this.opacity).stroke(0,this.opacity-55);
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
  }
  this.wrap = function() {
    if (this.pos.x> width + this.r/2) {
      this.pos.x = -this.r/2;
    } else if (this.pos.x < -this.r/2) {
      this.pos.x = width + this.r/2;
    }
    if (this.pos.y > height + this.r/2) {
      this.pos.y = -this.r/2;
    } else if (this.pos.y < -this.r/2){
      this.pos.y = height + this.r/2;
    }
  }
  // this.mousedOver = function(){
  //   if(mouseX > this.pos.x - this.r/2 && mouseX < this.pos.x + this.r/2 &&
  //      mouseY > this.pos.y - this.r/2 && mouseY < this.pos.y + this.r/2){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
}
