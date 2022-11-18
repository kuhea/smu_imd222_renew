class Obj {
  constructor(x, y, w, h, c, opt) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.c = c;
    this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, opt);
    // this.fillColor = null;
    // this.strokeColor = null;
  }

  // getBody() {
  //   return this.body;
  // }
  // setFillColor(fillColor) {
  //   this.fillColor = fillColor;
  //   return this;
  // }
  // setStrokeColor(strokeColor) {
  //   this.strokeColor = strokeColor;
  //   return this;
  // }
  // render() {
  //   push();
  //   translate(this.body.position.x, this.body.position.y);
  //   rotate(this.body.angle);
  //   if (this.strokeColor !== null) {
  //     strokeWeight(1);
  //     stroke(this.strokeColor);
  //   } else noStroke();
  //   if (this.fillColor !== null) fill(this.fillColor);
  //   else noFill();
  //   circle(0, 0, this.w, this.h);
  //   pop();
  // }
  // renderDirVector() {
  //   push();
  //   translate(this.body.position.x, this.body.position.y);
  //   rotate(this.body.angle);
  //   strokeWeight(1);
  //   stroke(0);
  //   line(0, 0, this.w, this.h, 0);
  //   pop();
  // }

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
}
