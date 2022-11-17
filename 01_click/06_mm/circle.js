class Circle {
  constructor(x, y, d, c, opt) {
    this.d = d;
    this.c = c;
    this.bodies = Bodies.circle(x, y, this.d * 0.5, opt);
  }

  render() {
    push();
    translate(this.bodies.position.x, this.bodies.position.y);
    rotate(this.bodies.angle);
    fill(this.c);
    // 컬러 c로만 만들었을 때의 단점. rgb로 안하고 한번에 집어넣어야한다?
    circle(0, 0, this.d);
    pop();
  }
}
