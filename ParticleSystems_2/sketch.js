var ps;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  ps = new ParticleSystem(createVector(width/2, 100)); 
  ps.addParticles(); 
};

function draw() {
	background(0);
	// ps.updatePosition();
	
	ps.run();
    
};

function mousePressed() {
	//if (ps.position.x == mouseX && ps.position.y == mouseY) {
		ps.shatter();
	//}
	
}

function mouseMoved() {
	ps.updatePosition();
}



