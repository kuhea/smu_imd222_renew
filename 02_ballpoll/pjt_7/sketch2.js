let Engine = Matter.Engine,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

let engine;
let mouseConstraint;

let boundaries = [];
let matterObjs = [];
let ground = [];
let boxes = [];

let alpha, beta, gamma;
let xpos, ypos;

let canvas;

function setup() {
  canvas = createCanvas(1600, 900);
  //   canvas.parent("sketch");
  engine = Engine.create();
  console.log(canvas.elt);
  let p5Mouse = Mouse.create(canvas.elt);
  p5Mouse.pixelRatio = pixelDensity();
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: p5Mouse,
    constraint: { stiffness: 0.2 },
  });
  Composite.add(engine.world, mouseConstraint);
  boundaries.push(new Rect(400, 610, 810, 60, { isStatic: true }));
  boundaries.push(new Rect(400, -10, 810, 60, { isStatic: true }));
  boundaries.push(new Rect(-10, 300, 60, 810, { isStatic: true }));
  boundaries.push(new Rect(1000, 300, 60, 810, { isStatic: true }));
  // boundaries.push(new Rect(400, 300, 60, 810, { isStatic: true }));
  boundaries.push(new Rect(800, 300, 810, 60, { isStatic: true }));
  matterObjs.push(new Rect(200, 300, 50, 50));
  matterObjs.push(new Circle(400, 300, 50, "#01ff21"));
  matterObjs.push(new Polygon(600, 300, 3, 50));
  matterObjs.push(new Polygon(100, 300, 5, 50));
  matterObjs.push(new Circle(200, 300, random(10, 50)));
  matterObjs.push(new Polygon(100, 300, 9, 50));
  matterObjs.push(new Polygon(700, 100, 9, 80, "#333"));
  matterObjs.push(new Rect(600, 400, 300, 20, { isStatic: true }));
  matterObjs.push(new Rect(200, 200, 200, 20, { isStatic: true }));
  console.log(mouseConstraint);

  xpos = width * 0.5;
  ypos = height * 0.5;
  alpha = 0;
  beta = 0;
  gamma = 0;
}

// function mousePressed() {
//   let size = random(10, 40);
//   let randColor = color("#000");
//   let newRecta;
//   if (mouseButton === LEFT) {
//     newRecta = new Rect(mouseX, mouseY, size, size, randColor);
//   } else if (mouseButton === CENTER) {
//     newRecta = new Circle(mouseX, mouseY, size, size, randColor);
//   }

//   Composite.add(engine.world, newRecta.bodies);

//   matterObjs.push(newRecta);
// }

function mouseDragged() {
  let size = random(10, 40);
  let randColor = color(random(256), random(256), random(256));
  let newRect = new Obj(mouseX, mouseY, size, size, randColor);
  Composite.add(engine.world, newRect.body);
  boxes.push(newRect);
}

function draw() {
  background("#F8F3FD");
  Engine.update(engine);

  // display variables
  fill(100);
  noStroke();
  text("alpha: " + alpha, 25, 25);
  text("beta: " + beta, 25, 50);
  fill(255, 0, 0);
  text("gamma: " + gamma, 25, 75);

  noStroke();
  matterObjs.forEach((obj) => {
    if (mouseConstraint.body === obj.body) {
      fill("#00ff00");
    } else {
      fill("#af00ed");
    }
    obj.renderBody();
  });
  noFill();
  stroke(0);
  matterObjs.forEach((obj) => obj.renderDirVector());

  noStroke();
  fill("#C0AAA9");
  boundaries.forEach((boundary) => boundary.renderBody());

  noStroke();
  fill("#FF8C58");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].renderBody();
  }
}

window.addEventListener("deviceorientation", (e) => {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

class Obj {
  constructor(x, y, w, h, c, opt) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.c = c;
    this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, opt);
  }

  renderBody() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    // rectMode(CENTER)를 안쓰고 중앙기준으로 직사각형 그리기.
    rect(-this.width * 0.5, -this.height * 0.5, this.width, this.height);
    pop();
  }
  renderDirVector() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    line(0, 0, this.width * 0.5, 0);
    pop();
  }

  // render() {
  //   rectMode(CENTER);
  //   push();
  //   translate(this.bodies.position.x, this.bodies.position.y);
  //   rotate(this.bodies.angle);
  //   fill(this.c);
  //   // 컬러 c로만 만들었을 때의 단점. rgb로 안하고 한번에 집어넣어야한다?
  //   rect(0, 0, this.w, this.h);
  //   pop();
  // }
}
