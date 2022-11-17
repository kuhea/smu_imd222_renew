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
  // canvas = createCanvas(1600, 900);
  canvas = createCanvas(innerWidth, innerHeight);
  canvas.parent("sketch");
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
  boundaries.push(new Rect(1410, 300, 60, 810, { isStatic: true }));
  boundaries.push(new Rect(800, 300, 700, 60, { isStatic: true }));
  boundaries.push(new Rect(800, 800, 700, 60, { isStatic: true }));
  matterObjs.push(
    new Rect(200, 300, 50, 50, {
      restitution: 1,
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
    })
  );
  matterObjs.push(
    new Circle(400, 300, 50, {
      restitution: 1,
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
    })
  );
  matterObjs.push(
    new Polygon(600, 300, 3, 50, {
      restitution: 1,
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
    })
  );
  matterObjs.push(
    new Polygon(100, 300, 5, 50, {
      restitution: 1,
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
    })
  );
  matterObjs.push(
    new Circle(200, 300, random(10, 50), {
      restitution: 1,
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
    })
  );
  matterObjs.push(
    new Polygon(100, 300, 9, 50, {
      restitution: 1,
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
    })
  );
  matterObjs.push(
    new Polygon(700, 100, 9, 80, {
      restitution: 1,
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
    })
  );
  matterObjs.push(
    new Polygon(1250, 70, 6, 80, {
      restitution: 1,
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
    })
  );
  boxes.push(new Rect(600, 500, 300, 20, { isStatic: true }));
  boxes.push(new Rect(200, 200, 200, 20, { isStatic: true }));
  boxes.push(new Rect(1348, 500, 200, 20, { isStatic: true }));
  console.log(mouseConstraint);

  xpos = width * 0.5;
  ypos = height * 0.5;
  alpha = 0;
  beta = 0;
  gamma = 0;
}

function mousePressed() {
  let size = random(10, 40);
  let randColor = color(random(256), random(256), random(256));

  // let newRect = new Obj(mouseX, mouseY, size, size, randColor);
  if (mouseButton === CENTER) {
    newRect = new Obj(mouseX, mouseY, size, size, randColor);
  } else if (mouseButton === RIGHT) {
    newRect = new Circle(mouseX, mouseY, size, randColor);
  }
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
  fill("#12a");
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
