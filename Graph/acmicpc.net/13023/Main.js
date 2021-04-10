const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath).toString().trim().split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let lineIdx = 0;
const [N, M] = input[lineIdx++].split(" ").map(Number);
const list = Array.from(Array(N), () => []);
let c = Array.from(Array(N), () => false);
for (let i = 0; i < M; i++) {
  const [X, Y] = input[lineIdx++].split(" ").map(Number);
  list[X].push(Y);
  list[Y].push(X);
}
for (let i = 0; i < N; i++) {
  dfs(i, 1);
}
console.log(0);
function dfs(curr, depth) {
  c[curr] = true;
  if (depth === 5) {
    console.log(1);
    process.exit();
  }
  for (const next of list[curr]) {
    if (c[next] === false) {
      dfs(next, depth + 1);
    }
  }
  c[curr] = false;
}