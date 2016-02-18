function ParticleSystem(position) {
	this.position = position;
	this.particles = [];
	this.rows = 20;
	this.cols = 20;
	this.intact = true;
	this.mass = 10;

	this.addParticles = function() {
		for (var i = 0; i < this.rows * this.cols; i++) {
			var newPos = createVector(this.position.x, this.position.y);
			this.particles.push(new Particle(newPos, random(2,15)));
		}		
	}

	this.updatePosition = function() {
		for (var i = 0; i < this.particles.length; i++) {
			this.particles[i].update(mouseX, mouseY);
		}
	}

	this.run = function() {
		for (var i = 0; i < this.particles.length; i++) {
			this.particles[i].display();
			if(!this.intact) {
				var gravity = createVector(0, 0.15 * this.particles[i].mass);
				this.particles[i].applyForce(gravity);
				this.particles[i].shatter();
			}
		}
	}

	this.shatter = function() {
		this.intact = false;
	}

}