const inputFilePath = "/sample.txt";

const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);
arr.unshift(0);
let visited = [],
  a = [],
  print = [];

function go(idx, startIdx) {
  if (idx === m) {
    print.push(a.join(" "));
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (visited[i] || arr[startIdx] > arr[i]) continue;
    visited[i] = true;
    a[idx] = arr[i];
    go(idx + 1, i);
    visited[i] = false;
  }
}
go(0, 0);
console.log(print.join("\n"));
