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

let howMany = 50;

function draw() {
  background(255);
  stroke(0);
  noFill();
  //   for (let tileX = 0; tileX < width; tileX += 10) {
  //     line(tileX, 0, tileX, height);
  //   }
  for (let tileCnt = 0; tileCnt < howMany; tileCnt++) {
    let tileX = (width / howMany + 1) * (tileCnt + 1);
    //정수로 나눗셈하면 정수로만 뱉어주는 프로그램이 있어서.. 보통 .0넣음
    line(tileX, 0, tileX, height);
  }
}
