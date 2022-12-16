let tiles = [];
let tileImgs = [];

function preload() {
  for (let i = 0; i < 16; i++) {
    let img = loadImage("./svgs/tile_" + i + "@2x.png");
    tileImgs.push(img);
  }
}

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  let tileWidth = width / (howManyX + 1);
  let tileHeight = height / (howManyY + 1);
  for (let tileCntY = 0; tileCntY < howManyY; tileCntY++) {
    for (let tileCntX = 0; tileCntX < howManyX; tileCntX++) {
      let tileX = tileWidth * (tileCntX + 1) - tileWidth * 0.5;
      let tileY = tileHeight * (tileCntY + 1) - tileHeight * 0.5;
      let tile = new Tile(tileX, tileY, tileWidth, tileHeight);
      tiles.push(tile);
    }
  }
  tiles.forEach((eachTile, indexNum) => {
    let frIdx = [null, null, null, null];
    //첫번째 줄이냐??
    if (indexNum < howManyX) {
    } else {
      frIdx[0] = indexNum - howManyY;
    }
    //마지막 줄이냐??
    if (indexNum >= tiles.length - howManyX) {
    } else {
      frIdx[2] = indexNum + howManyY;
    }
    //제일 왼쪽이냐
    if (indexNum % howManyX === 0) {
    } else {
      frIdx[3] = indexNum - 1;
    }
    //제일 오른쪽이냐
    if (indexNum % howManyX === howManyX - 1) {
    } else {
      frIdx[1] = indexNum + 1;
    }
    for (let i = 0; i < frIdx.length; i++) {
      let eachFriendIdx = frIdx[i];
      if (eachFriendIdx !== null) {
        let friend = tiles[eachFriendIdx];
        eachTile.setFriend(friend, i);
      }
    }
  });
  console.log(tiles[0].friends);
}

let howManyX = 20;
let howManyY = 20;

function mousePressed() {
  tiles.forEach((tile) => {
    tile.setStateByMouse(mouseX, mouseY);
  });
}

function draw() {
  background(255);
  tiles.forEach((tile) => {
    tile.render();
  });
}
