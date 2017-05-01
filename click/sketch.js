var particles = [];
var radius = 300;

function setup() {
  createCanvas();
  var canvas = createCanvas(document.getElementById("content").clientWidth, window.innerHeight-50);
  canvas.parent("content");
}
function mousePressed() {
  var p = new Particle(mouseX, mouseY, random(2,4));
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
  }
}
function windowResized() {
  resizeCanvas(document.getElementById("content").clientWidth, window.innerHeight-50);
  background(40);
}
