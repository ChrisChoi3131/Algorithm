const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");
const n = Number(input[0]);
const tree = new Array(n + 1);
const left = new Array(n + 1).fill(0);
const right = new Array(n + 1).fill(0);
const cnt = new Array(n + 1).fill(0);
input.splice(1, n + 1).map((line) => {
  const [root, left, right] = line.split(" ").map((node) => (node !== "-1" ? Number(node) : -1));
  tree[root] = { left, right };
  if (left !== -1) cnt[left]++;
  if (right !== -1) cnt[right]++;
});

let order = 0;
let root = 0;
for (let i = 1; i <= n; i++) {
  if (cnt[i] === 0) root = i;
}

inOrder(root, 1);

function inOrder(node, depth) {
  if (node === -1) return;
  const { left, right } = tree[node];
  inOrder(left, depth + 1);
  tree[node].depth = depth;
  tree[node].order = ++order;
  inOrder(right, depth + 1);
}

let maxDepth = 0;
for (let i = 1; i <= n; i++) {
  const { depth, order } = tree[i];
  if (left[depth] === 0) {
    left[depth] = order;
  } else {
    left[depth] = Math.min(left[depth], order);
  }
  right[depth] = Math.max(right[depth], order);
  maxDepth = Math.max(maxDepth, depth);
}
let maxWidth = 0;
let depthOfMax = 0;
for (let depth = 1; depth <= maxDepth; depth++) {
  if (maxWidth < right[depth] - left[depth] + 1) {
    maxWidth = right[depth] - left[depth] + 1;
    depthOfMax = depth;
  }
}
console.log(depthOfMax, maxWidth);
