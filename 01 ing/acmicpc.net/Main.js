const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let w, h;
let map, check;
let groupIdx;
let inputIdx = 0;
let ans = [];
const dx = [0, 0, -1, 1, -1, -1, 1, 1];
const dy = [-1, 1, 0, 0, -1, 1, -1, 1];
do {
  [w, h] = input[inputIdx++].split(" ").map(Number);
  if (w === 0 && h === 0) break;
  groupIdx = 0;
  map = [];
  check = new Array(h).fill(0).map(() => new Array(w).fill(0));
  for (let i = 0; i < h; i++) {
    map.push(input[inputIdx++].split(" ").map(Number));
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (check[i][j] === 0 && map[i][j] === 1) {
        groupIdx++;
        dfs(i, j);
      }
    }
  }
  ans.push(groupIdx + "\n");
} while (true);

console.log(ans.join(""));
function dfs(x, y) {
  if (check[x][y] !== 0) return;
  check[x][y] = groupIdx;
  for (let i = 0; i < 8; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= h || ny >= w) continue;
    if (map[nx][ny] === 1 && check[nx][ny] === 0) {
      dfs(nx, ny);
    }
  }
}
