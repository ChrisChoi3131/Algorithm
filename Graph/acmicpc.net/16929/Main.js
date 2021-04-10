const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath).toString().trim().split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let lineIdx = 0;
const [DX, DY] = [[0, -1, 1, 0], [-1, 0, 0, 1]];
const [N, M] = input[lineIdx++].split(" ").map(Number);
const list = Array.from(Array(N), () => []);
const visited = Array.from(Array(N), () => Array(M).fill(0));
for (let i = 0; i < N; i++) {
  list[i] = input[lineIdx++].split("");
}
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j]) dfs(i, j, 1);
  }
}
console.log("No");

function dfs(x, y, depth) {
  if (!visited[x][y]) visited[x][y] = depth;
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + DX[i], y + DY[i]];
    if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
    if (list[x][y] === list[nx][ny]) {
      if (visited[nx][ny] === 0) {
        dfs(nx, ny, depth + 1);
      } else {
        if (visited[x][y] - visited[nx][ny] >= 3) {
          console.log("Yes");
          process.exit();
        }
      }
    }
  }
}