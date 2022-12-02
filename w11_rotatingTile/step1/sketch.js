function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  console.log(boundingRects);
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
}

let howManyX = 20;
let howManyY = 20;

function draw() {
  background(255);
  noFill();
  stroke(0);
  strokeWeight(10);
  let tileWidth = width / (howManyX + 1);
  let tileHeight = height / (howManyY + 1);
  for (let tileCntX = 0; tileCntX < howManyX; tileCntX++) {
    for (let tileCntY = 0; tileCntY < howManyY; tileCntY++) {
      let tileCenterX = tileWidth * (tileCntX + 1);
      let tileCenterY = tileHeight * (tileCntY + 1);
      // circle(tileCenterX, tileCenterY, 10);
      line(
        tileCenterX - tileWidth * 0.5 + 5,
        tileCenterY,
        tileCenterX + tileWidth * 0.5 - 5,
        tileCenterY
      );
    }
  }
}
