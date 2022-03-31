const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const line = input[0].split("");
const startCapitalIdx = 65;
const startSmallIdx = 97;
const numOfAlphabet = 26;

let ans = [];
for (let i = 0; i < line.length; i++) {
  if (line[i].charCodeAt() >= startCapitalIdx && line[i].charCodeAt() <= startCapitalIdx + numOfAlphabet - 1) {
    if (line[i].charCodeAt() + 13 >= startCapitalIdx + numOfAlphabet) {
      ans.push(
        String.fromCharCode(startCapitalIdx + ((line[i].charCodeAt() + 13) % (startCapitalIdx + numOfAlphabet)))
      );
    } else {
      ans.push(String.fromCharCode(line[i].charCodeAt() + 13));
    }
  } else if (line[i].charCodeAt() >= startSmallIdx && line[i].charCodeAt() <= startSmallIdx + numOfAlphabet - 1)
    if (line[i].charCodeAt() + 13 >= startSmallIdx + numOfAlphabet) {
      ans.push(String.fromCharCode(startSmallIdx + ((line[i].charCodeAt() + 13) % (startSmallIdx + numOfAlphabet))));
    } else {
      ans.push(String.fromCharCode(line[i].charCodeAt() + 13));
    }
  else ans.push(line[i]);
}
console.log(ans.join(""));
