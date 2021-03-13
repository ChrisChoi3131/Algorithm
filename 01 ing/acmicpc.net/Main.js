const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath);
// let input = require("fs").readFileSync('/dev/stdin');
input = input.toString().trim();
let tmp = input.split(" ");
const N = Number(tmp[0]);
const M = Number(tmp[1]);

let a = [];
let ans = [];
go(0, 0);
console.log("ddd");
console.log(ans.join("\n"));

function go(index, start) {
  if (index === M) {
    ans = a.join(" ");
    return;
  }
  for (let i = start; i <= N; i++) {
    a[index] = i;
    go(index + 1, start + 1);
  }
}