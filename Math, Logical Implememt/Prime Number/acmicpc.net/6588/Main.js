"use strict";

const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const max = 1000001;
const check = Array(max).fill(false, 0, max);
(check[0] = true), (check[1] = true);
for (let i = 2; i <= max; i++) {
  if (check[i] === false) {
    for (let j = i * i; j <= max; j += i) {
      check[j] = true;
    }
  }
}

let idx = 0;
const ans = [];
while (true) {
  const num = Number(input[idx++]);
  if (num === 0) break;
  for (let i = 2; i <= num; i++) {
    if (check[i] === false && check[num - i] === false) {
      const secondP = num - i;
      ans.push(`${num} = ${i} + ${secondP}`);
      break;
    }
  }
}
console.log(ans.join("\n"));
