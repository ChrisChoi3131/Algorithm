"use strict";

const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input[0];
const ans = [];
outer: for (let i = 1; i <= T; i++) {
  const ps = input[i].split("");
  const left = [];
  for (const ele of ps) {
    if (ele === "(") {
      left.push(ele);
    } else {
      if (left.length === 0) {
        ans.push("NO");
        continue outer;
      } else {
        left.pop();
      }
    }
  }
  if (left.length === 0) {
    ans.push("YES");
  } else {
    ans.push("NO");
  }
}
console.log(ans.join("\n"));
