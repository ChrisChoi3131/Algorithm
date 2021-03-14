const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath);
// let input = require("fs").readFileSync('/dev/stdin');
input = input.toString().trim().split("\n");
let firstLine = input[0].split(" ");
const N = Number(firstLine[0]);
const M = Number(firstLine[1]);
let array = input[1].split(" ").map(x => Number(x)).sort((a, b) => a - b);
array = cal(array);
let c = array[1];
array = array[0];
let a = [];
let ans = [];
go(0);
console.log(ans.join("\n"));

function cal(array) {
  let a = [], b = [], prev;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== prev) {
      a.push(array[i]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = array[i];
  }
  return [a, b];
}

function go(index) {
  if (index === M) {
    ans.push(a.join(" "));
    return;
  }
  for (let i = 0; i < array.length; i++) {
    a[index] = array[i];
    go(index + 1);
  }
}