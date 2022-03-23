const inputFilePath = "/sample.txt";

const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let idx = 0;
let arr = [];
let c = [];

let ans = [];
let line = [];
const n = 6;

function go(idx) {
  if (idx === n) {
    ans.push(line.join(" ") + "\n");
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (c[i] || line[idx - 1] > arr[i]) continue;
    c[i] = true;
    line[idx] = arr[i];
    go(idx + 1);
    c[i] = false;
  }
}
while (idx !== -1) {
  arr = input[idx].split(" ").map(Number);
  let k = arr.shift();
  if (k === 0) break;
  go(0);
  idx++;
  ans.push("\n");
}
console.log(ans.join(""));
