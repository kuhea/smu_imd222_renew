let Engine = Matter.Engine,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  Constraint = Matter.Constraint;

let engine;
let mouseConstraint;

let boundaries = [];
let matterObjs = [];
let ground = [];
let boxes = [];
let matterBodies = [];
let matterConstraints = [];
// let colors = ["#ececd1", "#f55a3c", "#f19648", "#f5d259", "#063e7b"];
let colors = ["#f55a3c", "#f19648", "#063e7b"];

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
  //세로
  boundaries.push(new Rect(-10, 300, 60, 810, { isStatic: true }));
  boundaries.push(new Rect(1000, 300, 60, 810, { isStatic: true }));
  boundaries.push(new Rect(1410, 300, 20, 810, { isStatic: true }));
  //가로
  // boundaries.push(new Rect(400, -15, 810, 60, { isStatic: true }));
  boundaries.push(new Rect(800, 300, 700, 20, { isStatic: true }));
  boundaries.push(new Rect(400, 610, 810, 60, { isStatic: true }));
  boundaries.push(new Rect(900, 800, 1000, 60, { isStatic: true }));
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
    new Polygon(200, 50, 3, 50, {
      restitution: 1,
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
    })
  );
  // matterObjs.push(
  //   new Polygon(100, 300, 5, 50, {
  //     restitution: 1,
  //     friction: 0,
  //     frictionAir: 0,
  //     frictionStatic: 0,
  //   })
  // );
  matterObjs.push(
    new Circle(1000, 300, random(10, 50), {
      restitution: 1,
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
    })
  );
  matterObjs.push(
    new Polygon(1100, 100, 7, 50, {
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
  console.log(mouseConstraint);

  let body0 = new P5Polygon(1300, 200, 5, 30);
  matterBodies.push(body0);
  let constraint0 = new P5Constraint({
    pointA: { x: 1300, y: 100 },
    bodyB: body0.getBody(),
    pointB: { x: -10, y: -10 },
  });
  matterConstraints.push(constraint0);

  let body1 = new P5Rect(300, 100, 200, 20);
  // let ball1 = new P5Circle(550, 150, 20);
  matterBodies.push(body1);
  // matterBodies.push(ball1);
  let constraint1 = new P5Constraint({
    pointA: { x: 200, y: 100 },
    bodyB: body1.getBody(),
    length: 0,
  });
  matterConstraints.push(constraint1);

  let body2 = new P5Rect(300, 100, 200, 20);
  // let ball2 = new P5Circle(550, 150, 20);
  matterBodies.push(body2);
  // matterBodies.push(ball2);
  let constraint2 = new P5Constraint({
    pointA: { x: 600, y: 200 },
    bodyB: body2.getBody(),
    length: 0,
  });
  matterConstraints.push(constraint2);

  let body3 = new P5Rect(300, 100, 200, 20);
  // let ball3 = new P5Circle(550, 150, 20);
  matterBodies.push(body3);
  // matterBodies.push(ball3);
  let constraint3 = new P5Constraint({
    pointA: { x: 1300, y: 500 },
    bodyB: body3.getBody(),
    length: 0,
  });
  matterConstraints.push(constraint3);

  let body4 = new P5Polygon(100, 300, 5, 50, {
    restitution: 1,
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
  });
  matterBodies.push(body4);
  let constraint4 = new P5Constraint({
    pointA: { x: 100, y: 300 },
    bodyB: body4.getBody(),
    length: 0,
  });
  matterConstraints.push(constraint4);

  let body5A = new P5Polygon(500, 400, 6, 30);
  let body5B = new P5Polygon(600, 400, 7, 60);
  matterBodies.push(body5A);
  matterBodies.push(body5B);
  let constraint5 = new P5Constraint({
    bodyA: body5A.getBody(),
    pointA: { x: -10, y: -10 },
    bodyB: body5B.getBody(),
    pointB: { x: -10, y: -10 },
    stiffness: 0.001,
    damping: 0.1,
  });
  matterConstraints.push(constraint5);

  matterBodies.forEach((body) => {
    body.setFillColor(colors[Math.floor(random(colors.length))]);
  });

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
      fill("#f55a3c");
    } else {
      fill("#f5d259");
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

  matterBodies.forEach((body) => {
    body.render();
  });
  matterConstraints.forEach((constraint) => constraint.render());
}

window.addEventListener("deviceorientation", (e) => {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});
