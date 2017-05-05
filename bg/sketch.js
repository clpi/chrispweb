var drops = [];
var numberOfDrops = 150;

function setup(){
  canvas = createCanvas(window.innerWidth,window.innerHeight);
  imageMode(CORNER);
  canvas.position(0,0);
  for(var i = 0; i<numberOfDrops; i++){
    var temp = new Drop();
    drops.push(temp);
  }
}
function draw(){
  clear();
  for(var i = 0; i<drops.length; i++){
    drops[i].fall();
    drops[i].display();
  }
}
function windowResized() {
  resizeCanvas(window.innerWidth,window.innerHeight);
}
