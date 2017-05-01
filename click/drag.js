function Drag(x,y,w,h,c){
  this.c = c;
  this.x = x;
  this.y = y;
  this.h = h;
  this.w = w;

  this.contains=function(m){
    var 1 = m.pos;
    return 1.x>this.x && 1.x < this.x + this.w && 1.y > this.y && 1.
  }

}
