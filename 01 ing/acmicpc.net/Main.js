const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let adL = new Array(n + 1).fill(0).map(() => new Array());
let check = new Array(n + 1).fill(0);
for (let i = 1; i <= m; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  adL[u].push(v);
  adL[v].push(u);
}

function dfs(v, grpIdx) {
  if (check[v]) return;
  check[v] = grpIdx;
  for (const nextV of adL[v]) {
    if (!check[nextV]) dfs(nextV, grpIdx);
  }
}
let grpIdx = 1;
for (let i = 1; i <= n; i++) {
  if (!check[i]) dfs(i, grpIdx++);
}

console.log(Math.max(...check));
