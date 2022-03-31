const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");

let cntAlphabet = new Array(26).fill(0);
let chars = input[0].split("");
let idxSmallLetter = 97;

chars.forEach((char) => {
  cntAlphabet[char.charCodeAt() - idxSmallLetter]++;
});

console.log(cntAlphabet.join(" "));
