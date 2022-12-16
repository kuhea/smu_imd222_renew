function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
}

let howManyX = 20;
let howManyY = 20;
let seedNum = 0;
let noiseX = 0;
let noiseY = 0;

function mousePressed() {
  seedNum = random(5);
}

function draw() {
  // randomSeed(seedNum);
  noiseSeed(1);
  noStroke();
  fill(255);
  rect(0, 0, width, height);
  let tileWidth = width / (howManyX + 1);
  let tileHeight = height / (howManyY + 1);
  noiseX = 0;
  for (let tileCntX = 0; tileCntX < howManyX; tileCntX++) {
    noiseY = 0;
    for (let tileCntY = 0; tileCntY < howManyY; tileCntY++) {
      let tileCenterX = tileWidth * (tileCntX + 1);
      let tileCenterY = tileHeight * (tileCntY + 1);
      // let randAngle = random(0, radians(360));
      let noiseAngle = radians(360) * noise(noiseX, noiseY);
      noiseY += 0.3;
      push();
      translate(tileCenterX, tileCenterY);
      // rotate(randAngle);
      rotate(noiseAngle);
      noFill();
      stroke(0);
      strokeWeight(10);
      line(0 - tileWidth * 0.5 + 5, 0, 0 + tileWidth * 0.5 - 5, 0);
      // fill(255, 0, 0);
      // noStroke();
      // circle(0 + tileWidth * 0.5 - 5, 0, 10);
      pop();
    }
    noiseX + 0.3;
  }
}
