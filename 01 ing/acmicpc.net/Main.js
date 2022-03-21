const inputFilePath = "/sample.txt";

const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);

let visited = [],
  a = [],
  print = [];
function go(idx, preNum) {
  if (idx === m) {
    print.push(a.join(" "));
    return;
  }
  for (let i = preNum; i <= n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    a[idx] = i;
    go(idx + 1, i);
    visited[i] = false;
  }
}
go(0, 1);
console.log(print.join("\n"));
