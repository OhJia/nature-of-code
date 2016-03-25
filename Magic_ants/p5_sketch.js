var bg = [];
var counter=0;
var numImg=4

movers = [];
attractors = [];

var densitySkipper = 3;



var a;
var z = 0;
var change = false;

function preload() {

  bg[0] = loadImage("icon.png");

}


function setup() {
  var myCan = createCanvas(500, 500);
  myCan.parent('p5-canvas');
  resetPoints(counter);
 
}

function resetPoints(z){
 
 //image(bg[z], 0, 0, 500, 500);
 //console.log("width: ", img.width)
 
 attractors=[];
 movers=[];

  bg[z].loadPixels();
  console.log(bg[z]);

  for (i = 0; i < width; i += densitySkipper) {
   for (j = 0; j < height; j += densitySkipper) {
    var pixelLoc = 4 * (i + (j * width));


    if (bg[z].pixels[pixelLoc] > 0 && bg[z].pixels[pixelLoc] < 244) {
     var loc = createVector(i, j);
     // console.log("loc: ", loc);
     a = new Attractor(loc);
     attractors.push(a);

    }
   }
  }
  // println(height * width);
  // println(attractors.length)
  bg[z].updatePixels();

  // fill(0)
  // rect(0, 0, 630, 630)
  for (i = 0; i < attractors.length; i++) {
   var m = new Mover(random(0.1, 1), random(width), random(height));
   movers.push(m);
  }
 
 
}


function draw() {
 //image(bg, 0, 0);

 background(255, 80);


 for (i = 0; i < attractors.length; i++) {
  var attr = attractors[i]; /// 
  var mov = movers[i]; 
  var force = attr.attract(mov); 
  mov.applyForce(force);
  mov.run();
 }

 // if (mouseIsPressed) {
 //  var mousePos = createVector(mouseX, mouseY);

 //  for (i = 0; i < movers.length; i++) {
 //    var force = p5.Vector.sub(movers[i].location, mousePos);
 //    var distance = force.mag();
 //    distance = constrain(distance, 5.0, 20.0);
 //    force.normalize();
 //    //console.log("distance: ", distance);
 //    // var strength =  (distance) /(200 * movers[i].mass) ;
 //    // force.mult(strength);
 //    force.mult(0.5);
 //    movers[i].applyForce(force);
 //  }
 // }



//  if (change == true) {


//   z = z + 1




//   updateImage();


//   if (z > 6) {
//    z = 0;
//   }

//   change = false;

//  }

}

function mousePressed() {
  var mousePos = createVector(mouseX, mouseY);

  for (i = 0; i < movers.length; i++) {
    var newMover = movers[i];
    var force = p5.Vector.sub(newMover.location, mousePos);
    var distance = force.mag();
    distance = constrain(distance, 5.0, 20.0);
    force.normalize();
    //console.log("distance: ", distance);
    // var strength =  (distance) /(200 * movers[i].mass) ;
    // force.mult(strength);
    force.mult(0.9);
    newMover.applyForce(force);
  }
}

function updateImage() {

 console.log(z)

 for (z = 0; z < bg.length; z++) {
  image(bg[z], 0, 0);

  bg[z].loadPixels();


  bg[z].updatePixels();

  //redraw();

 }
}






