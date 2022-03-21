const inputFilePath = "/sample.txt";

const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let visited = new Array(n + 1).fill(false);

let print = [];
let a = [];
go(0);
console.log(print.join("\n"));
function go(idx) {
  if (idx === m) {
    print.push(a.join(" "));
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    a[idx] = i;
    go(idx + 1);
    visited[i] = false;
  }
}
