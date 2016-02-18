var Particle= function(position, mass) {
	this.position = position;
	this.mass = mass;
	this.velocity = createVector(random(-2,2), random(-2,0)); // create (0,0)
	this.acceleration = createVector(0, 0);

	Particle.prototype.update = function() {
		this.position.add(this.velocity);
		this.velocity.add(this.acceleration);
		this.acceleration.mult(0);
	}

	Particle.prototype.applyForce = function(f) {
		this.acceleration.add(p5.Vector.div(f, this.mass)); // creates new vector (static function)
	}

	Particle.prototype.render = function() {
		noStroke();
		fill(255);
		ellipse(this.position.x, this.position.y, 5*this.mass, 5*this.mass);
	}

	Particle.prototype.isDead = function() {
		return this.position.y > height || this.position.x > width ||
			this.position.y < 0 || this.position.x < 0;
	}
}