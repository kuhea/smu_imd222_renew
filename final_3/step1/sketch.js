// int [][] grid;
// int x;
// int y;
// int dir;

// int ANTUP = 0;
// int ANTRIGHT = 1;
// int ANTDOWN = 2;
// int ANTLEFT = 3;

// void setup() {
//   size(400, 400);
//   grid = new int[width][height];
//   x = 200;
//   y = 200;
//   grid[x][y] = 1;
// }

// void turnRight() {
//   dir++;
//   if (dir > ANTLEFT) {
//     dir = ANTUP;
//   }
// }

// void turnLeft() {
//   dir--;
//   if (dir > ANTUP) {
//     dir = ANTLEFT;
//   }
// }

// void moveForward() {
//   if(dir == ANTUP) {
//     y--;
//   } else if(dir == ANTRIGHT) {
//     x++;
//   } else if(dir == ANTDOWN) {
//     y++;
//   } else if(dir == ANTLEFT) {
//     x--;
//   }

//   if (x > width) {
//     x = 0;
//   } else if (x < 0) {
//     x = width-1;
//   }
//   if (y > height) {
//     y = 0;
//   } else if (y < 0) {
//     y = height-1;
//   }
// }

// void draw() {
//   background(255);

//   int state = grid[x][y];

//   if (state == 0) {
//     turnRight();
//     grid[x][y] = 1;
//     moveForword();
//   } else if (state == 1) {
//     turnLeft();
//     grid[x][y] = 0;
//     moveForward();
//   }

//   loadPixels();
//   for (int i = 0; i < width; i++); {
//     for (int j = 0; j < height; j++); {
//       int pix = i * width + j;
//       if (grid[i][j] == 0) {
//         pixels[pix] = color(255);
//       } else {
//         pixels[pix] = color(0);
//       }
//     }

//   }
//   updatePixels();
// }
