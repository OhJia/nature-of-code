
// var p = new Perceptron(3);
// var point = [50, -12, 1];
// var result = p.feedforward(point);

// console.log("result "+result);

function Perceptron(num_of_inputs) {
	this.weights = [];
	this.c = 0.01; // learning constant
	
	/* 
		weights start off random 
	*/
	for (var i = 0; i < num_of_inputs; i++) {
		this.weights[i] = Math.random(-1,1);
	}

	/* 
		return an output based on inputs
	*/
	this.feedforward = function(inputs) {
		var sum = 0;
		for (var i = 0; i < this.weights.length; i++) {
			sum += inputs[i] * this.weights[i];
			console.log(i+": "+inputs[i]+", "+this.weights[i]);
		}
		console.log("sum: "+sum);
		return this.activate(sum);
	}

	/* 
		output is +1 or -1
	*/
	this.activate = function(sum) {
		if (sum > 0) return 1;
		else return -1;
	}

	/* 
		train network against known data
	*/
	this.train = function(inputs, desired) {
		var guess = this.feedforward(inputs);
		var error = desired - guess;

		for (var i = 0; i < this.weights.length; i++) {
			this.weights[i] += this.c * error * inputs[i];
		}

	}

} // end of Perceptron




