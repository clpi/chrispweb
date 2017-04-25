function Bubble(x,y,v){
  this.x = x;
  this.y = y;
  this.v = v;
  this.col1 = map(x, 0, 1500, 0, 255);
  this.col2 = map(y, 0, 800, 0, 255);
  this.display = function() {
    ellipse(this.x, this.y, 40 + this.v*2, 40+this.v*2).fill(this.col1, this.col2, 100, 50).stroke(255,255,255,60);
  }
  this.move = function() {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }
}
