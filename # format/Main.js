const inputFilePath = "/sample.txt";
let input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");
console.log(input);
