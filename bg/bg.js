var canvas;
var particles=[];
var mouse;
function setup(){
  canvas = createCanvas(window.innerWidth,window.innerHeight);
  imageMode(CORNER);
  canvas.position(0,0);
  for(var i =0;i<50;i++){
    var randpos = createVector(random(0,width),random(0,height))
    while(isOutOfView(randpos)){
      randpos.x = random(0,width);
      randpos.y = random(0,height);
    }
    var temp = new Particle(randpos.x, randpos.y, random(50,100), random(1,2));
    particles.push(temp);
  }
}
function draw(){
  clear();
  for(var i=0;i<particles.length;i++){
    var gravity = createVector(random(-0.01,0.01),random(-0.01,0.01));
    particles[i].applyForce(gravity);
    //particles[i].mousedOver();
    particles[i].update();
    particles[i].display();
    particles[i].wrap();
  }
}
function isOutOfView(pos){
  if(pos.x>0.1 * width && pos.x<0.9*width && pos.y>0.2*height && pos.y<0.8 * height){
    return true;
  }else{
    return false;
  }
}
function windowResized() {
  resizeCanvas(window.innerWidth,window.innerHeight);
}
