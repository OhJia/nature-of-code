var SpinnyParticle = function(position, mass) {
	AttractionParticle.call(this, position, mass);
	this.angle = 0;
	this.aVelocity = 0.01;
	this.aAcceleration = 0.001;

	this.update = function() {
		Particle.prototype.update.call(this);
		this.angle += this.aVelocity;
		this.aVelocity += this.aAcceleration;
		if (this.angle > TWO_PI*3 || this.angle < 0){
			this.aVelocity *= -1;
			this.aAcceleration *= -1;
		}
	}

	this.render = function() {
		push();
		translate(this.position.x, this.position.y);
		rotate(this.angle);
		noStroke();
		fill(255, 150)
		rect(0, 0, 5*this.mass, 5*this.mass);
		pop();
		//return force;
	}
 
}

SpinnyParticle.prototype = Object.create(AttractionParticle.prototype);
SpinnyParticle.constructor = SpinnyParticle;