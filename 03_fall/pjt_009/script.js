let Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint,
  Composite = Matter.Composite;

let engine = Engine.create();

let render = Render.create({
  element: document.body,
  engine: engine,
});

let boxes = [];
let floor = [];
let ground;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  ground = new Rect(400, 610, 810, 60, "#C0AAA9", { isStatic: true });
  Composite.add(engine.world, ground1.bodies, ground2.bodies);
}

function mousePressed() {
  let size = random(10, 40);
  let randColor = color(random(256), random(256), random(256));
  let newRect;
  if (mouseButton === LEFT) {
    newRect = new Circle(mouseX, mouseY, size, randColor);
  } else if (mouseButton === CENTER) {
    newRect = new Rect(mouseX, mouseY, size, size, randColor);
  } else if (mouseButton === RIGHT) {
    newRect = new Rect(mouseX, mouseY, size, size, randColor);
  }

  Composite.add(engine.world, newRect.bodies);

  boxes.push(newRect);
}

function mouseDragged() {
  let size = random(10, 40);
  let randColor = color("#0");
  let newFloor;
  if (mouseButton === LEFT) {
    newFloor = new Rect(mouseX, mouseY, size, size, randColor);
  } else if (mouseButton === CENTER) {
    newFloor = new Circle(mouseX, mouseY, size, randColor);
  }
  // else if (mouseButton === RIGHT) {
  //   newRect = new Rect(mouseX, mouseY, size, size, randColor);
  // }

  Composite.add(engine.world, newFloor.bodies);

  floor.push(newFloor);
}

function draw() {
  background("#F8F3FD");
  Engine.update(engine);

  noStroke();
  fill("#FF8C58");

  ground1.render();
  ground2.render();

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].render();
  }

  for (let i = 0; i < floor.length; i++) {
    floor[i].render();
  }
}

// dkdkdkdkd

render.canvas.width = window.innerWidth;
render.canvas.height = window.innerHeight;

let ground1 = Bodies.rectangle(
  window.innerWidth / 2,
  window.innerHeight / 1.1,
  800,
  20,
  { isStatic: true }
);
let ground2 = Bodies.rectangle(
  window.innerWidth / 1.1,
  window.innerHeight / 1.5,
  800,
  20,
  { isStatic: true }
);

let boxA = Bodies.rectangle(500, 200, 80, 80, { isStatic: true });
let boxB = Bodies.rectangle(500, 300, 80, 80);
let boxC = Bodies.rectangle(500, 400, 80, 80);
let boxD = Bodies.circle(30, 75, 3);
let boxE = Bodies.circle(20, 30, 10);

let AtoB = Constraint.create({
  bodyA: boxA,
  bodyB: boxB,
});

let BtoC = Constraint.create({
  bodyA: boxB,
  bodyB: boxC,
});

Composite.add(engine.world, [
  ground1,
  ground2,
  boxA,
  boxB,
  boxC,
  AtoB,
  BtoC,
  boxD,
  boxE,
]);

Render.run(render);

let runner = Runner.create();

Runner.run(runner, engine);
