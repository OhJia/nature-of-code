// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Path Following
// Path is a just a straight line in this example
// Via Reynolds: // http://www.red3d.com/cwr/steer/PathFollow.html

// Using this variable to decide whether to draw all the stuff
var debug = false;

// A path object (series of connected points)
var path;
var pathImage;
var pathVecs;

// Array of vehicles
var cars;


function preload() {
  pathImage = loadImage("shrug.jpg");
}  

function setup() {
  //var text = createP("Hit space bar to toggle debugging lines.");
  //text.position(10,365);

  var myCan = createCanvas(500, 500);
  myCan.parent('p5-canvas');
  
  pathVecs = [];
  cars = [];
  
  loadPixelsFunc(pathVecs, function(p){
    path = new Path(p);
    for ( var i = 0; i < p.length; i++) {
      var car = new Vehicle(0, height/2, 2, 0.02 * i);
      cars.push(car);
    }
  });

  // Each vehicle has different maxspeed and maxforce for demo purposes
  
  // car1 = new Vehicle(0, height/2, 2, 0.02);
  // car2 = new Vehicle(0, height/2, 3, 0.05);
}


function loadPixelsFunc(p, callback) {
  console.log("loading image");
  pathImage.loadPixels();
  console.log("loaded pixels");
  for (i = 0; i < width; i += 6) {
   for (j = 0; j < height; j += 6) {
    var pixelLoc = 4 * (i + (j * height));
    //console.log(pixelLoc);
    //console.log(pathImage.pixels[pixelLoc]);
    if (pathImage.pixels[pixelLoc] > 0 && pathImage.pixels[pixelLoc] < 244) {
     var loc = createVector(i, j);
     p.push(loc);
     //console.log(pathVecs);
    }
   }
  }
  pathImage.updatePixels();

  callback(p);  
}

function draw() {
  background(255, 80);
  // Display the path
  path.display();

  for ( var i = 0; i < cars.length; i++) {
    cars[i].follow(path);
    cars[i].run();
    cars[i].borders(path);
  }
}

function keyPressed() {
  if (key == ' ') {
    debug = !debug;
  }
}


