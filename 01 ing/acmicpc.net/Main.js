const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m, v] = input[0].split(" ").map(Number);
let adL = new Array(n + 1).fill(0).map(() => new Array());
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  adL[a].push(b);
  adL[b].push(a);
}
adL.forEach((ele) => ele.sort((a, b) => a - b));

function dfs(v) {
  if (check[v]) return;
  ans.push(v);
  check[v] = true;
  for (const nextV of adL[v]) {
    if (!check[nextV]) {
      dfs(nextV);
    }
  }
}
function bfs(v) {
  ans = [];
  check = new Array(n + 1).fill(false);
  let q = [];
  q.unshift(v);
  check[v] = true;
  while (q.length) {
    const currV = q.pop();
    ans.push(currV);
    for (const nextV of adL[currV]) {
      if (!check[nextV]) {
        q.unshift(nextV);
        check[nextV] = true;
      }
    }
  }
}
let ans = [];
let check = new Array(n + 1).fill(false);
dfs(v);
console.log(ans.join(" "));
bfs(v);
console.log(ans.join(" "));
