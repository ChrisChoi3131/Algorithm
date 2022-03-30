const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const line = input[0].split("");
let stack = [];
let ans = [];
let isTag = false;
for (let i = 0; i < line.length; i++) {
  let char = line[i];
  if (char === "<") {
    isTag = true;
    print();
  } else if (char === ">") {
    ans.push(char);
    isTag = false;
    continue;
  }

  if (isTag) ans.push(char);
  else {
    if (char !== " ") {
      stack.push(char);
    } else {
      print();
      ans.push(char);
    }
  }
  if (i === line.length - 1) print();
}
function print() {
  while (stack.length) {
    ans.push(stack.pop());
  }
}
console.log(ans.join(""));
