function ParticleSystem(origin) {
	this.origin = origin;
	this.particle = [];

	this.addParticle = function(){
		if (random(1) > .5) {
			this.particle.push(new SpinnyParticle(createVector(0, 0).add(this.origin), random(1)));
		} else {
			this.particle.push(new AttractionParticle(createVector(0, 0).add(this.origin), random(1)));
		}
		
	}
	
    this.run = function(){
    	for (var i = 0; i < this.particle.length; i++){
			var gravity = createVector(0, 0.05 * this.particle[i].mass);
			this.particle[i].applyForce(gravity);

			for (var j = 0; j < this.particle.length; j++){
    			if (i != j) {
    				var force = this.particle[j].attract(this.particle[i]);
    				this.particle[i].applyForce(force);
    			}
    		}
			
			this.particle[i].update();
			this.particle[i].render();
			
			if(this.particle[i].isDead()) {
				this.particle.splice(i, 1);
			}
		}
    }
	
}