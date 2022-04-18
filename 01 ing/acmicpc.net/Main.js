const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input[0]);
const tree = new Array(n).fill(0).map(() => new Array());
let distance = new Array(n).fill(0);
let root = 0;
let maxDis = 0;
for (let i = 1; i <= n; i++) {
  const line = input[i].split(" ").map(Number);
  const x = line[0] - 1;
  for (let j = 1; j < line.length; j += 2) {
    const [y, dis] = [line[j] - 1, line[j + 1]];
    tree[x].push({ node: y, dis });
    tree[y].push({ node: x, dis });
    if (line[j + 2] === -1) break;
  }
}
dfs(root, 0);

function dfs(from, sumDistance) {
  tree[from].forEach((to) => {
    const { dis, node } = to;
    if (node !== root) {
      if (distance[node] === 0) {
        distance[node] = sumDistance + dis;
        dfs(node, distance[node]);
      }
    }
  });
}
for (let i = 0; i < n; i++) {
  if (maxDis < distance[i]) {
    maxDis = distance[i];
    root = i;
  }
}
distance = new Array(n).fill(0);
dfs(root, 0);
console.log(Math.max(...distance));
