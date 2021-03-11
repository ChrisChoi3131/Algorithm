const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath);
// let input = require("fs").readFileSync('/dev/stdin');
input = input.toString().trim();
let tmp = input.split(" ");
const N = Number(tmp[0]);
const M = Number(tmp[1]);
console.log(N, M);
let c = [];
let a = [];
let ans = "";
go(0, 1);
console.log(ans);
function go(index, start) {
  if (index === M) {
    for (let i = 0; i < M; i++) {
      ans += a[i];
      if (i != M - 1) ans += " ";
    }
    ans += "\n";
    return;
  }
  for (let i = start; i <= N; i++) {
    if (c[i]) continue;
    c[i] = true;
    a[index] = i;
    go(index + 1, i + 1);
    c[i] = false;
  }
}