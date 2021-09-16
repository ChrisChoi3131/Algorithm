"use strict";

const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, s] = input[0].split(" ").map((x) => Number(x));
const siblings = input[1].split(" ").map((x) => Number(x));
const dis = [];

const GDC = (a, b) => {
  while (b !== 0) {
    const tmpA = a;
    const tmpB = b;
    a = tmpB;
    b = tmpA % tmpB;
  }
  return a;
};

siblings.forEach((sibling) => {
  dis.push(Math.abs(s - sibling));
});
let ans = dis[0];
for (let i = 1; i < dis.length; i++) {
  ans = GDC(ans, dis[i]);
}
console.log(ans);
