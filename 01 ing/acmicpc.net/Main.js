const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");

const n = Number(input[0]);
const tree = new Array(n);
input
  .splice(1, n + 1)
  .map((line) => line.trim().split(" "))
  .forEach((line) => {
    const [root, left, right] = line.map((node) => node.charCodeAt() - 65);
    tree[root] = { left, right };
  });

const ans = [];
preOrder(0);
ans.push("\n");
inOrder(0);
ans.push("\n");
postOrder(0);
ans.push("\n");
console.log(ans.join(""));
function preOrder(node) {
  ans.push(String.fromCharCode(node + 65));
  const { left, right } = tree[node];
  if (left >= 0) preOrder(left);
  if (right >= 0) preOrder(right);
}

function inOrder(node) {
  const { left, right } = tree[node];

  if (left >= 0) inOrder(left);
  ans.push(String.fromCharCode(node + 65));
  if (right >= 0) inOrder(right);
}

function postOrder(node) {
  const { left, right } = tree[node];
  if (left >= 0) postOrder(left);
  if (right >= 0) postOrder(right);
  ans.push(String.fromCharCode(node + 65));
}
