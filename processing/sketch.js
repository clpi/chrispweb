var particles = [];
var radius = 200;

function setup() {
  createCanvas();
  var canvas = createCanvas(document.getElementById("container").clientWidth, window.innerHeight-250);
  canvas.parent("container");
}
function mousePressed() {
  var p = new Particle(mouseX, mouseY, random(0.5,1), random(4,7));
  particles.push(p);
}
function keyPressed() {
  if (key == ' ') {
    particles.splice(0, 1);
  }
}
function draw() {
  background(40);
  ellipse(mouseX,mouseY,radius,radius).fill(255,255,255,20);
  var target = createVector(mouseX, mouseY);
  for (var i = 0; i < particles.length; i++) {
    particles[i].arrive(target, radius);
    particles[i].update();
    particles[i].display();
    for(var j=0;j<particles.length;j++){
      if(i!==j && particles[i].intersects(particles[j])){
        particles[i].avoid(particles[j]);
        j++;
      }
    }
  }
}
function windowResized() {
  resizeCanvas(document.getElementById("container").clientWidth, window.innerHeight-250);
  background(40);
}
