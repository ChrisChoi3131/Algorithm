const inputFilePath = "/sample.txt";

const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [l, c] = input[0].split(" ").map(Number);
let alphabets = input[1].split(" ").sort();
let ans = [];
let visited = [];
let line = [];
const vowels = ["a", "e", "i", "o", "u"];
function go(idx, startIdx) {
  if (idx === l) {
    let numOfVowels = 0,
      numOfConsonants = 0;
    for (let i = 0; i < l; i++) {
      if (vowels.includes(line[i])) {
        numOfVowels++;
      } else {
        numOfConsonants++;
      }
    }
    if (numOfVowels >= 1 && numOfConsonants >= 2) ans.push(line.join(""));
    return;
  }
  for (let i = startIdx; i < c; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    line[idx] = alphabets[i];
    go(idx + 1, i);
    visited[i] = false;
  }
}

go(0, 0);
console.log(ans.join("\n"));
