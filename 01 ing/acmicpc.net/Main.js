const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input[0]);
const tree = new Array(n + 1).fill(0).map(() => new Array());
input.splice(1, n).forEach((line) => {
  const [x, y, dis] = line.split(" ").map(Number);
  tree[x].push({ to: y, dis });
  tree[y].push({ to: x, dis });
});
let root = 1;
let distance = new Array(n + 1).fill(0);
dfs(root);
function dfs(from) {
  tree[from].forEach((node) => {
    const { to, dis } = node;
    if (distance[to] === 0 && to !== root) {
      distance[to] = distance[from] + dis;
      dfs(to);
    }
  });
}
let maxDis = 0;
for (let i = 1; i <= n; i++) {
  if (maxDis < distance[i]) {
    root = i;
    maxDis = distance[i];
  }
}
distance = new Array(n + 1).fill(0);
dfs(root);
console.log(Math.max(...distance));
