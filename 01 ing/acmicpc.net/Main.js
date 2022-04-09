const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");

const k = Number(input[0]);
const inequalitySigns = input[1].split(" ");
let max = -Infinity;
let min = Infinity;
const check = new Array(10).fill(false);
const a = [];
go(0, 0);
function go(start, idx) {
  if (idx === k + 1) {
    let num = "";
    a.forEach((ele) => {
      num += ele;
    });
    // console.log(num);
    let numForCompare = Number(num);
    if (numForCompare > max) max = num;
    if (numForCompare < min) min = num;
    return;
  }
  for (let i = 0; i < 10; i++) {
    if (check[i]) continue;
    if (idx > 0) {
      if (inequalitySigns[idx - 1] === "<" && a[idx - 1] < i) {
        check[i] = true;
        a[idx] = i;
        go(i, idx + 1);
        check[i] = false;
      } else if (inequalitySigns[idx - 1] === ">" && a[idx - 1] > i) {
        check[i] = true;
        a[idx] = i;
        go(i, idx + 1);
        check[i] = false;
      }
    } else {
      check[i] = true;
      a[idx] = i;
      go(i, idx + 1);
      check[i] = false;
    }
  }
}
console.log(max + "\n" + min);
