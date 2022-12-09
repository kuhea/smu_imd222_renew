class Tile {
  constructor(a, b, c, d) {
    this.x = a;
    this.y = b;
    this.w = c;
    this.h = d;
    this.state = false;
  }

  isHover(mX, mY) {
    if (mX >= this.x && mX < this.x + this.w) {
      if (mY >= this.y && mY < this.y + this.h) {
        return true;
      }
    }
    return false;
  }

  toggleState() {
    this.state = !this.state;
  }

  setStateByMouse(mX, mY) {
    if (this.isHover(mX, mY)) {
      this.toggleState();
    }
  }

  render() {
    noStroke();
    if (this.state) {
      fill(255, 0, 0);
    } else {
      fill(255, 127, 0);
    }
    push();
    translate(this.x, this.y);
    rect(0, 0, w, h);
    pop();
  }
}
