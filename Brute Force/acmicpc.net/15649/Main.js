const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath)
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");
let tmp = input[0].split(" ");
const N = Number(tmp[0]);
const M = Number(tmp[1]);
let c = [];
let a = [];
let ans = "";
go(0);
console.log(ans);

function go(index) {
  if (index === M) {
    for (let i = 0; i < M; i++) {
      ans += a[i];
      if (i != M - 1) ans += " ";
    }
    ans += "\n";
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (c[i]) continue;
    c[i] = true;
    a[index] = i;
    go(index + 1);
    c[i] = false;
  }
}