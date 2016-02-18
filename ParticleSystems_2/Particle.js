function Particle(position, mass) {
	this.position = position;
	this.mass = mass;
	this.velocity = createVector(random(-10,10), random(-5,10));
	this.acceleration = createVector(0, 0.1);
	this.lifespan = 255;

	this.shatter = function() {
		this.mass *= 0.95;
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		this.acceleration.mult(0);
		this.lifespan -= 2;
	}

	this.update = function(x, y) {
		this.position = createVector(x, y);
	}

	this.applyForce = function(f) {
		this.acceleration.add(p5.Vector.div(f, this.mass));
	}

	this.display = function() {
		noStroke();
		fill(255, 150);
		ellipseMode(CENTER);
		ellipse(this.position.x, this.position.y, this.mass, this.mass);
	}

	this.isDead = function() {
		return lifespan < 0;
	}
}