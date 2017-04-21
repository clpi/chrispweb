var x;
var y;
function setup(){
  var canvas = createCanvas(1500,700);
  canvas.parent("container");
  background(40);
}
function draw(){
  x = map(mouseX, 0, 1500, 0, 255);
  y = map(mouseY, 0, 800, 0, 255);
  ellipse(mouseX,mouseY,50,50).fill(x,y,255,40).stroke(255,255,255,50);
}
function mousePressed(){
  background(40);
}
