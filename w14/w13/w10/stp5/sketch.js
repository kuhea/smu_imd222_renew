function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  seedValue = floor(random(1000));
}

let howManyX = 20;
let howManyY = 20;
let seedValue;

function draw() {
  randomSeed(seedValue);
  background(255);
  stroke(0);
  noFill();
  for (let tileCntX = 0; tileCntX < howManyX; tileCntX++) {
    for (let tileCntY = 0; tileCntY < howManyY; tileCntY++) {
      let dice = random(2) > 1;
      let tileCenterX = (width / (howManyX + 1)) * (tileCntX + 1);
      let tileCenterY = (height / (howManyY + 1)) * (tileCntY + 1);
      let tlX = tileCenterX - 0.5 * (width / (howManyX + 1));
      let tlY = tileCenterY - 0.5 * (height / (howManyY + 1));
      let brX = tileCenterX + 0.5 * (width / (howManyX + 1));
      let brY = tileCenterY + 0.5 * (height / (howManyY + 1));
      if (dice) {
        line(tlX, tlY, brX, brY);
      } else {
        line(
          tlX + width / (howManyX + 1),
          tlY,
          brX - width / (howManyX + 1),
          brY
        );
      }
    }
  }
}
