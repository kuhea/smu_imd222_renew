let sun;
let planets = [];
let aliens = [];
let G = 100;
let numPlanets = 100;
let numAliens = 100;
let destabilise = 0;

function setup() {
  createCanvas(700, 700);
  sun = new Body(100, createVector(0, 0), createVector(0, 0));

  for (let i = 0; i < numPlanets; i++) {
    //planet position
    let r = random(sun.r, min(windowWidth / 4, windowHeight / 4));
    let theta = random(TWO_PI);
    let planetPos = createVector(r * cos(theta), r * sin(theta));

    //planet velocity
    let planetVel = planetPos.copy();
    planetVel.rotate(HALF_PI);
    planetVel.setMag(sqrt((G * sun.mass) / planetPos.mag()));
    planetVel.mult(random(1 - destabilise, 1 + destabilise));
    planets.push(new Body(random(5, 10), planetPos, planetVel));
  }

  for (let i = 0; i < numAliens; i++) {
    //planet position
    let r = random(sun.r, min(windowWidth / 4, windowHeight / 4));
    let thetaa = random(TWO_PI);
    let aliensPos = createVector(r * cos(thetaa), r * sin(thetaa));

    //planet velocity
    let alienVel = aliensPos.copy();
    alienVel.rotate(HALF_PI);
    alienVel.setMag(sqrt((G * sun.mass) / aliensPos.mag()));
    alienVel.mult(random(1 - destabilise, 1 + destabilise));
    aliens.push(new Body(random(5, 10), aliensPos, alienVel));
  }
}

function draw() {
  translate(width / 2, height / 2);
  background(180, 600);
  for (let i = 0; i < planets.length; i++) {
    sun.attract(planets[i]);
    planets[i].update();
    planets[i].show();
  }
  for (let i = 0; i < aliens.length; i++) {
    sun.attract(aliens[i]);
    aliens[i].update();
    aliens[i].show();
  }
  sun.show();
}

function Body(_mass, _pos, _vel) {
  this.mass = _mass;
  this.pos = _pos;
  this.vel = _vel;
  this.r = this.mass;
  this.path = [];

  this.show = function () {
    noStroke();
    fill(0);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  };

  this.update = function () {
    //update the position
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  };

  this.applyForce = function (f) {
    this.vel.x += f.x / this.mass; //f = ma => a = f/m
    this.vel.y += f.y / this.mass;
  };

  this.attract = function (child) {
    let r = dist(this.pos.x, this.pos.y, child.pos.x, child.pos.y);
    let f = this.pos.copy().sub(child.pos);
    f.setMag((G * this.mass * child.mass) / (r * r));
    child.applyForce(f);
  };
}
