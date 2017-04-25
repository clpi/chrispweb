var x;
var y;
var bubbles = [];
function setup(){
  var canvas = createCanvas(document.getElementById("container").clientWidth, window.innerHeight - 300);
  canvas.parent("container");
}
function mouseDragged(){
 var velocity = abs(winMouseX - pwinMouseX)
  if(frameCount % 2 == 0){
    bubbles.push(new Bubble(mouseX, mouseY, velocity));
  }
}
function mousePressed(){
  background(40);
}
function draw(){
  background(40);
  for(var i = 0; i<bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].display();
  }
  if(bubbles.length>1000){
    bubbles.splice(0,1);
  }
}
function windowResized() {
  resizeCanvas(document.getElementById("container").clientWidth, window.innerHeight - 300);
  background(40);
}
