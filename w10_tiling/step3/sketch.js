function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  console.log(boundingRects);
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  // 클래스 못 받고 아이디만 받음
  background("#102939");
}

let howManyX = 20;
let howManyY = 20;

function draw() {
  background(255);
  stroke(0);
  noFill();
  for (let tileCntX = 0; tileCntX < howManyX; tileCntX++) {
    for (let tileCntY = 0; tileCntY < howManyY; tileCntY++) {
      let tileCenterX = (width / howManyX + 1) * (tileCntX + 1);
      let tileCenterY = (height / howManyY + 1) * (tileCntY + 1);
      let tlX = tileCenterX - 0.5 * (width / howManyX + 1);
      let tlY = tileCenterY - 0.5 * (height / howManyX + 1);
      let brX = tileCenterX + 0.5 * (width / howManyX + 1);
      //괄호가 너비와 같음
      let brY = tileCenterY + 0.5 * (height / howManyX + 1);
      line(tlX, tlY, brX, brY);
    }
  }
  // x가 0일때, y가 0,1,2,3...
  // x가 1일때, y가 0,1,2,3... 이런 식으로 감!
}
