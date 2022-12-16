class Tile {
  constructor(a, b, c, d) {
    this.x = a;
    this.y = b;
    this.w = c;
    this.h = d;
    this.state = false;
    this.friends = [null, null, null, null];
  }

  setFriend(friend, idx) {
    this.friends[idx] = friend;
  }

  getFriendsState() {
    let states = 0;

    // //위
    // if (this.friends[0] === null) {
    //   states += 0;
    // } else if (this.friends[0].state) {
    //   states += 1;
    // }
    // //오른쪽
    // if (this.friends[1] === null) {
    //   states += 0;
    // } else if (this.friends[1].state) {
    //   states += 2;
    // }
    // //아래
    // if (this.friends[2] === null) {
    //   states += 0;
    // } else if (this.friends[2].state) {
    //   states += 4;
    // }
    // //왼쪽
    // if (this.friends[3] === null) {
    //   states += 0;
    // } else if (this.friends[3].state) {
    //   states += 8;
    // }

    for (let i = 0; i < this.friends.length; i++) {
      if (this.friends[i] === null) {
        states += 0;
      } else if (this.friends[i].state) {
        states += pow(2, i);
        // 자바로 쓸거면 Math.pow()로 써야함. 2의 i 승이라는 뜻
      }
    }

    // if(1 == '1') //true 값이 똑같아? true
    // if(1 === '1') // 타입도 똑같고 값도 똑같아? false

    return states;
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
    // noStroke();
    if (this.state) {
      // fill(255, 0, 0);
      // ellipse(this.w * 0.5, this.h * 0.5, this.w, this.h);
      image(tileImgs[this.getFriendsState()], 0, 0, this.w, this.h);
    } else {
      // fill(255, 127, 0);
      stroke(200);
      rect(0, 0, this.w, this.h);
    }
    pop();
  }
}
