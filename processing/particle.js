function Particle(x, y, m, r) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 10;
  this.maxforce = 0.2;
  this.r = r;
  this.m = m;
  this.applyForce = function(force) {
    this.acc.add(force);
  }
  this.arrive = function(target, radius) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    if (d<radius){
      var m = map(d,0,radius,0, this.maxspeed);
      desired.setMag(m);
    }else{
      desired.setMag(this.maxspeed);
    }
    var steering = p5.Vector.sub(desired, this.vel);
    steering.limit(this.maxforce);
    this.applyForce(steering);
  }
  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  this.display = function() {
    var colorX = map(this.pos.x,0,width,70,220);
    var colorY = map(this.pos.y,0,height,70,220);
    var theta = this.vel.heading() + PI/2;
    fill(colorY + 30,colorX,155,180);
    noStroke();
    push();
    translate(this.pos.x, this.pos.y);
    rotate(theta);
    beginShape();
      vertex(0, -this.r * 2);
      vertex(-this.r, this.r * 2);
      vertex(this.r, this.r * 2);
    endShape(CLOSE);
    pop();
  }
  this.avoid = function(other){
    var desiredavoidance = this.r + other.r + 20;
    var between = p5.Vector.sub(this.pos,other.pos).mult(desiredavoidance * 0.0004);
    this.applyForce(between);
  }
  this.intersects = function(other){
    var d = p5.Vector.mag(p5.Vector.sub(this.pos, other.pos));
    if(d < this.r + other.r + 20 && dist(mouseX,mouseY,this.pos.x,this.pos.y)>radius/2){
      return true;
    }else{
      return false;
    }
  }
}
