const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let playGround = [];
let check = new Array(n).fill(0).map(() => new Array(m).fill(false));
for (let i = 1; i <= n; i++) {
  playGround.push(input[i].split(""));
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!check[i][j]) {
      let result = dfs(i, j, -1, -1, playGround[i][j]);
      if (result) {
        console.log("Yes");
        process.exit();
      }
    }
  }
}
console.log("No");
function dfs(x, y, px, py, color) {
  if (check[x][y]) return true;
  check[x][y] = true;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (px === nx && py === ny) continue;
    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
    if (playGround[nx][ny] === color) {
      if (dfs(nx, ny, x, y, color)) return true;
    }
  }
  return false;
}
