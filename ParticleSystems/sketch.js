var ps;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  ps = new ParticleSystem(createVector(width/2, 100));
  //ps2 = new ParticleSystem(createVector(width/2, 500));
  
};

function draw() {
  background(0);
  
  ps.updateOrigin();
  ps.addParticle();
  ps.run();
  // ps2.addParticle();
  // ps2.run();
    
};



