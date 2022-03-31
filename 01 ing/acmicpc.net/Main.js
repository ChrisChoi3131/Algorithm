const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const word = input[0].split("");

let prefixs = [];
for (let i = 0; i < word.length; i++) {
  prefixs[i] = word.slice(i);
}
prefixs.sort();
let ans = [];
for (let i = 0; i < prefixs.length; i++) {
  ans.push(prefixs[i].join(""));
}
console.log(ans.join("\n"));
