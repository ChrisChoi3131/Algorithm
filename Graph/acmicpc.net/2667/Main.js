const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath).toString().trim().split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
let list = Array.from(Array(N), () => []);
let c = Array.from(Array(N), () => []);
for (let i = 1; i <= N; i++) {
  for (let j = 0; j < input[i].length; j++) {
    list[i - 1].push(Number(input[i].charAt(j)));
  }
  c[i - 1] = Array(N).fill(0);
}
let groupIdx = 1;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (c[i][j] === 0 && list[i][j] === 1) {
      dfs(i, j, groupIdx++);
    }
  }
}
function dfs(x, y, groupIdx) {
  if (c[x][y] !== 0) return;
  c[x][y] = groupIdx;
  for (let i = 0; i < 4; i++) {
    const currX = x + dx[i];
    const currY = y + dy[i];
    if (currX >= 0 && currX < N && currY >= 0 && currY < N) {
      if (c[currX][currY] === 0 && list[currX][currY] === 1) {
        dfs(currX, currY, groupIdx);
      }
    }
  }
}
let ans = Array.from(Array(groupIdx - 1), () => 0);
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (c[i][j] !== 0) {
      ans[c[i][j] - 1]++;
    }
  }
}
console.log(groupIdx - 1);
console.log(ans.sort((a, b) => a - b).join("\n"));
