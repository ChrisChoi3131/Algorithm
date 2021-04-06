const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath).toString().trim().split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let list = Array.from(Array(N + 1), () => []);
for (let i = 1; i <= M; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  list[x].push(y);
  list[y].push(x);
}
let c = Array.from(Array(N + 1), () => false);
let groups = Array.from(Array(N + 1), () => 0);
for (let i = 1; i <= N; i++) {
  if (!c[i]) dfs(i, i);
}
let counts = {};
for (let i = 1; i < groups.length; i++) {
  let num = groups[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}
console.log(Object.keys(counts).length);

function dfs(node, groupNum) {
  if (c[node]) return;
  groups[node] = groupNum;
  c[node] = true;
  for (const next of list[node]) {
    if (!c[next]) dfs(next, groupNum);
  }
}