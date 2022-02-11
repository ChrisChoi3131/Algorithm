const inputFilePath = "/sample.txt";

let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, B] = input[0].split(" ").map((value) => Number(value));
let ans = [];
calc(N, B);
function calc(num, base) {
  const quotinent = Math.floor(num / base);
  const remainder = num % base;
  ans.push(remainder);
  if (quotinent === 0) return;
  calc(quotinent, base);
}
function convertNumToString(num) {
  if (num >= 10) {
    return String.fromCharCode(num + 55);
  } else {
    return num;
  }
}
console.log(
  ans
    .reverse()
    .map((value) => convertNumToString(value))
    .join("")
);
