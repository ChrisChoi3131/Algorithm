const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input[0]);
const tree = new Array(n).fill(0).map(() => new Array());
const parent = new Array(n).fill(-1);
input.splice(1, n).map((line) => {
  const [x, y] = line.split(" ").map((node) => Number(node) - 1);
  tree[x].push(y);
  tree[y].push(x);
});

dfs(0, 0);

function dfs(node, parentNode) {
  parent[node] = parentNode;
  tree[node].forEach((child) => {
    if (parent[child] === -1) {
      dfs(child, node);
    }
  });
}

const ans = [];
for (let i = 1; i < n; i++) {
  ans.push(parent[i] + 1);
}
console.log(ans.join("\n"));
