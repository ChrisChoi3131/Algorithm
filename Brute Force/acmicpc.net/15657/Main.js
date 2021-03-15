const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath);
// let input = require("fs").readFileSync('/dev/stdin');
input = input.toString().trim().split("\n");
let firstLine = input[0].split(" ");
const N = Number(firstLine[0]);
const M = Number(firstLine[1]);
let array = input[1].split(" ").map(x => Number(x)).sort((a, b) => a - b);
let a = [];
let ans = [];
let c = [];
go(0);
console.log(ans.join("\n").trim());

function go(index) {
  if (index === M) {
    ans.push(a.join(" "));
    return;
  }
  for (let i = 0; i < N; i++) {
    if (a[index - 1] > array[i]) continue;
    a[index] = array[i];
    go(index + 1);
  }
}

