const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
let map = [];
let check = new Array(n).fill(0).map(() => new Array(m).fill(Number.MAX_SAFE_INTEGER));
for (let i = 1; i <= n; i++) {
  map.push(input[i].split("").map(Number));
}
let q = [{ x: 0, y: 0 }];
check[0][0] = 1;
while (q.length) {
  const { x, y } = q.pop();
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
    if (check[nx][ny] > check[x][y] + 1 && map[nx][ny] === 1) {
      check[nx][ny] = check[x][y] + 1;
      q.unshift({ x: nx, y: ny });
    }
  }
}
console.log(check[n - 1][m - 1]);
