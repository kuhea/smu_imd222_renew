class Polygon {
  constructor(x, y, sides, radius, color, options) {
    this.sides = sides;
    this.radius = radius;
    this.color = color;
    this.body = Matter.Bodies.polygon(x, y, this.sides, this.radius, options);
    Composite.add(engine.world, this.body);
  }
  renderBody() {
    beginShape();
    this.body.vertices.forEach((v) => {
      vertex(v.x, v.y);
    });
    endShape(CLOSE);
  }
  renderDirVector() {
    line(
      this.body.position.x,
      this.body.position.y,
      this.body.vertices[0].x,
      this.body.vertices[0].y
    );
  }
  render() {
    fill(this.c);
  }
}
