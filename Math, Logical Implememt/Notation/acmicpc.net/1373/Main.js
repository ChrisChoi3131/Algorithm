"use strict";

const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const num = input[0].split("").map((x) => Number(x));
num.reverse();
const ans = [0];
let cnt = 0;
let idx = 0;
for (let i = 0; i < num.length; i++) {
  if (cnt === 3) {
    cnt = 0;
    idx++;
    ans[idx] = 0;
  }
  if (num[i] === 1) ans[idx] = ans[idx] + Math.pow(2, i % 3);
  cnt++;
}
ans.reverse();
console.log(ans.join(""));
