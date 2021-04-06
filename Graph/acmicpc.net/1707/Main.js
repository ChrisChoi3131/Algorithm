
const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath).toString().trim().split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let lineIdx = 0;
const T = Number(input[lineIdx++]);
for (let test_case = 0; test_case < T; test_case++) {
  const [V, E] = input[lineIdx++].split(" ").map(Number);
  let list = Array.from(Array(V + 1), () => []);
  let c = Array.from(Array(V + 1)).fill(0);
  let ans = "YES";
  for (let i = 0; i < E; i++) {
    const [X, Y] = input[lineIdx++].split(" ").map(Number);
    list[X].push(Y);
    list[Y].push(X);
  }
  let queue = [];
  for (let i = 1; i <= V; i++) {
    if (c[i] === 0) {
      c[i] = 1;
      bfs(i, c, list);
    }
  }

  for (let i = 1; i <= V; i++) {
    for (const next of list[i]) {
      if (c[i] === c[next]) {
        ans = "NO";
      }
    }
  }
  console.log(ans);
}
function bfs(node, c, list) {
  let queue = [];
  queue.unshift(node);
  while (queue.length) {
    let curr = queue.pop();
    for (const next of list[curr]) {
      if (c[next] === 0) {
        if (c[curr] === 1) {
          c[next] = 2;
        } else if (c[curr] === 2) {
          c[next] = 1;
        }
        queue.unshift(next);
      }
    }
  }
}