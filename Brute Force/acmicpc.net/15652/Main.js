const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath);
// let input = require("fs").readFileSync('/dev/stdin');
input = input.toString().trim();
let tmp = input.split(" ");
const N = Number(tmp[0]);
const M = Number(tmp[1]);

let a = [];
let c = [];
let ans = [];
go(0);
console.log(ans);

function go(index) {
  if (index === M) {
    ans += a.join(" ");
    ans += "\n";
    return;
  }
  for (let i = 1; i <= N; i++) {
    // c[i] = true;
    if (a[index - 1] > i) continue;
    a[index] = i;
    go(index + 1);
    // c[i] = false;
  }
}