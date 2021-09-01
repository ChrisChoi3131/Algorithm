"use strict";

const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0];
const ans = [];
for (let i = 1; i <= N; i++) {
  const s = input[i].split(" ");
  const reverseS = [];
  s.forEach((element) => {
    reverseS.push(element.split("").reverse().join(""));
  });
  ans.push(reverseS.join(" "));
}

console.log(ans.join("\n"));
