const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const n = Number(input[0]);
const tree = new Array(n).fill(0).map(() => new Array());
const check = new Array(n).fill(0);
const distance = new Array(n).fill(0);
const root = 0;

input.splice(1, n + 1).forEach((line) => {
  const [x, y] = line.split(" ").map((node) => Number(node) - 1);
  tree[x].push(y);
  tree[y].push(x);
});

go(root, -1);
function go(node, parent) {
  if (check[node] === 1) return node;
  check[node] = 1;

  for (const child of tree[node]) {
    if (child === parent) continue;
    const res = go(child, node);
    if (res === -2) return -2;
    if (res >= 0) {
      check[node] = 2;
      if (node === res) return -2;
      else return res;
    }
  }
  return -1;
}
const q = [];
let head = 0,
  tail = 0;
const q_push = (node) => (q[tail++] = node);
const q_pop = () => q[head++];
const q_size = () => tail - head;

for (let i = 0; i < check.length; i++) {
  if (check[i] === 2) q_push(i);
}

while (q_size()) {
  const node = q_pop();
  for (const child of tree[node]) {
    if (check[child] !== 2 && distance[child] === 0) {
      q_push(child);
      distance[child] = distance[node] + 1;
    }
  }
}
console.log(distance.join(" "));
