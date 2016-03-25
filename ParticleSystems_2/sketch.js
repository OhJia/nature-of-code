var ps;
var psArray = [];

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  ps = new ParticleSystem(createVector(width/2, 100)); 
  ps.addParticles(); 
  psArray.push(ps);
};

function draw() {
	background(0);
	// ps.updatePosition();
	
	ps.run();
    
};

function mousePressed() {
	//if (ps.position.x == mouseX && ps.position.y == mouseY) {
	ps.shatter();
	var psNew = new ParticleSystem(createVector(mouseX, mouseY)); 
  	psNew.addParticles(); 
  	psArray.push(psNew);
	//}

	
}

function mouseMoved() {
	ps.updatePosition();
}



