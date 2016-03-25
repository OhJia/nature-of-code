// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Path Following


function Path(vectors) {
  this.points = vectors;
  console.log(this.points);
  // A path has a radius, i.e how far is it ok for the boid to wander off
  this.radius = 5;
  this.start;
  this.end;
  // A Path is line between two points (p5.Vector objects)
  

  // Draw the path
  this.display = function() {

    for (var i = 0; i < this.points.length-1; i++){
      this.start = this.points[i];
      this.end = this.points[i+1];

      strokeWeight(this.radius*2);
      stroke(200,100);
      line(this.start.x,this.start.y,this.end.x,this.end.y);

      strokeWeight(1);
      stroke(200);
      line(this.start.x,this.start.y,this.end.x,this.end.y);

    }

  }
}










