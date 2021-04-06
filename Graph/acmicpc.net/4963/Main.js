const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath).toString().trim().split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let lineIdx = 0;

let c, w, h;
let list;
const DX = [-1, -1, -1, 0, 0, 1, 1, 1];
const DY = [-1, 0, 1, -1, 1, - 1, 0, 1];
while (true) {
  [w, h] = input[lineIdx++].split(" ").map(Number);
  if (w === 0 && h === 0) break;
  list = Array.from(Array(h), () => []);
  c = Array.from(Array(h), () => []);
  for (let i = 0; i < h; i++) {
    list[i] = input[lineIdx++].split(" ").map(Number);
    c[i] = Array.from(Array(w), () => 0);
  }
  let groupIdx = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (list[i][j] === 1 && c[i][j] === 0) {
        dfs(i, j, ++groupIdx)
      }
    }
  }
  console.log(groupIdx);
}


function dfs(x, y, groupIdx) {
  if (c[x][y] !== 0) return;
  c[x][y] = groupIdx;
  for (let i = 0; i < 8; i++) {
    let nextX = x + DX[i];
    let nextY = y + DY[i];
    if (nextX >= 0 && nextY >= 0 && nextX < h && nextY < w && list[nextX][nextY] === 1 && c[nextX][nextY] === 0) {
      dfs(nextX, nextY, groupIdx);
    }
  }
}