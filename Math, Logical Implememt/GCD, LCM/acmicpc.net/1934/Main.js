"use strict";

const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(" ").map((x) => Number(x));
  let [a, b] = [A, B];
  while (b != 0) {
    const r = a % b;
    a = b;
    b = r;
  }
  const g = a;
  const l = g * (A / g) * (B / g);
  console.log(l);
}
