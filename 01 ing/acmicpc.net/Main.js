const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

function go(n) {
  if (n === 0) return;
  if (n % 2 === 0) {
    go(-(n / 2));
    ans += "0";
  } else {
    if (n > 0) {
      go(-Math.floor(n / 2));
    } else {
      go(-((n - 1) / 2));
    }
    ans += "1";
  }
}

const num = Number(input[0]);
let ans = "";
if (num === 0) {
  ans = "0";
} else {
  go(num);
}
console.log(ans);
