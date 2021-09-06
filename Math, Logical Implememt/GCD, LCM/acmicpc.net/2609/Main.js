"use strict";

const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B] = input[0].split(" ").map((x) => Number(x));
let [a, b] = [A, B];

while (b != 0) {
  const r = a % b;
  a = b;
  b = r;
}
const g = a;
console.log(a);
const l = g * (A / g) * (B / g);
console.log(l);
