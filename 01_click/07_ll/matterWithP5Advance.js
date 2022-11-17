let Engine = Matter.Engine,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

let engine;

let boxes = [];
let floor = [];
let ground1;
let ground2;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  ground1 = new Rect(400, 610, 810, 60, "#C0AAA9", { isStatic: true });
  ground2 = new Rect(200, 400, 200, 60, "#C0AAA9");
  // ground2 = new Rect(200, 300, 200, 60, "#C0AAA9", { isStatic: true });
  Composite.add(engine.world, ground1.bodies, ground2.bodies);
}

function mousePressed() {
  let size = random(10, 40);
  let randColor = color(random(256), random(256), random(256));
  let newRect;
  if (mouseButton === LEFT) {
    newRect = new Circle(mouseX, mouseY, size, size, randColor);
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
    newFloor = new Circle(mouseX, mouseY, size, size, randColor);
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
