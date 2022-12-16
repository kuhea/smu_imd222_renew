class Tile {
  constructor(a, b, c, d) {
    this.x = a;
    this.y = b;
    this.w = c;
    this.h = d;
    this.state = false;
    this.friends = [null, null, null, null];
  }

  addFriend(friend, idx) {
    this.friends[idx] = friend;
  }

  getFriendsState() {
    let sum = 0;
    if (this.friends[0] === null) {
    } else if (this.friends[0].state) {
      sum += 1;
    }
    if (this.friends[1] === null) {
    } else if (this.friends[1].state) {
      sum += 2;
    }
    if (this.friends[2] === null) {
    } else if (this.friends[2].state) {
      sum += 4;
    }
    if (this.friends[3] === null) {
    } else if (this.friends[3].state) {
      sum += 8;
    }
    return sum;
  }

  isHover(mx, my) {
    if (mx >= this.x && mx < this.x + this.w) {
      if (my >= this.y && my < this.y + this.h) {
        return true;
      }
    }
    return false;
  }

  toggleState() {
    this.state = !this.state;
  }

  setStateByMouse(mx, my) {
    if (this.isHover(mx, my)) {
      this.toggleState();
    }
  }

  render() {
    push();
    translate(this.x, this.y);
    noStroke();
    if (this.state) {
      let friendsState = this.getFriendsState();
      image(imgTiles[friendsState], 0, 0, this.w, this.h);
    } else {
      fill(255, 127, 0);
      rect(0, 0, this.w, this.h);
    }
    pop();
  }
}
