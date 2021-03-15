const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath);
// let input = require("fs").readFileSync('/dev/stdin');
input = input.toString().trim().split("\n");
let firstLine = input[0].split(" ");
const N = Number(firstLine[0]);
const M = Number(firstLine[1]);
let array = input[1].split(" ").map(x => Number(x)).sort((a, b) => a - b);
array = calc(array);
let a = [];
let c = array[1];
array = array[0];
let ans = [];
go(0);
console.log(ans.join("\n").trim());

function calc(arr) {
  let a = [], b = [], prev;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      a.push(arr[i]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = arr[i];
  }
  return [a, b];
}

function go(index) {
  if (index === M) {
    ans.push(a.join(" "));
    return;
  }
  for (let i = 0; i < array.length; i++) {
    if (c[i] == 0) continue;
    c[i]--;
    a[index] = array[i];
    go(index + 1);
    c[i]++;
  }
}

