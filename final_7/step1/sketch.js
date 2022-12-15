//original source https://twitter.com/hisadan/status/1427990445741670402?s=20
n = 1999;
i = 0;
a = [];
r = 0;
function setup() {
  createCanvas(600, 600, WEBGL);
  for (i = 0; i < n * 2; i++) {
    a[i] = random(660) - 330;
  }
}
function draw() {
  background(0);
  stroke(255);
  for (i = 0; i < n * 2 - 1; i++) {
    push();
    translate(a[i], a[i + 1], 50 * sin(mag(a[i], a[i + 1]) / 30 - r));
    point(0, 0);
    pop();
  }
  r += 0.1;
}
