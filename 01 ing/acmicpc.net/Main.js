const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath).toString().trim().split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [N, M, V] = input[0].split(" ").map(Number);
let list = Array.from(Array(N + 1), () => []);
for (let i = 1; i <= M; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  list[x].push(y);
  list[y].push(x);
}
list.forEach(element => element.sort((a, b) => a - b));
let c = Array(N + 1).fill(false);
let dfsRes = [];
dfs(V);
let bfsRes = [];
c = Array(N + 1).fill(false);
bfs(V);
console.log(dfsRes.join(" "));
console.log(bfsRes.join(" "));
function dfs(node) {
  if (c[node] === true) return;
  dfsRes.push(node);
  c[node] = true;
  for (const next of list[node]) {
    if (c[next] === false) dfs(next);
  }
}
function bfs(start) {
  let queue = [];
  queue.push(start);
  c[start] = true;
  while (queue.length) {
    let node = queue.shift();
    bfsRes.push(node);
    for (const next of list[node]) {
      if (c[next] === false) {
        queue.push(next);
        c[next] = true;
      }
    }
  }
}
