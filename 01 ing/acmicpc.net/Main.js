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

function go(idx, start) {
  if (idx === m) {
    print.push(a.join(" "));
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (i < start) continue;
    a[idx] = i;
    go(idx + 1, i);
  }
}
go(0, 1);
console.log(print.join("\n"));
