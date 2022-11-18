const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint, Composite } =
  Matter;

let ground;
let boxes = [];
let bird;
let world, engine;
let mConstraint;
let slingshot;

let dotImg;
let boxImg;
let bkgImg;

function preload() {
  dotImg = loadImage("bird.png");
  boxImg = loadImage("box.png");
  bkgImg = loadImage("background.png");
}

function setup() {
  const canvas = createCanvas(700, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height - 10, width, 20);
  for (let i = 0; i < 4; i++) {
    boxes[i] = new Box(500, 300 - i * 75, 90, 90);
  }

  bird = new Bird(200, 300, 25);

  slingshot = new SlingShot(200, 300, bird.body);

  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse,
  };

  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

function keyPressed() {
  if (key == " ") {
    World.remove(world, bird.body);
    bird = new Bird(200, 300, 25);
    slingshot.attach(bird.body);
  }
  // if (key == "a") {
  //   box = new Box(600, 100, 90, 90);
  //   World.add(world, box.body);
  //   console.log("나 여기 살아있다.");
  //   box.show();
  // }
}

function mouseReleased() {
  setTimeout(() => {
    slingshot.fly();
  }, 100);
}

function draw() {
  background(bkgImg);
  Matter.Engine.update(engine);
  ground.show();
  for (let box of boxes) {
    box.show();
  }
  slingshot.show();
  bird.show();
}
