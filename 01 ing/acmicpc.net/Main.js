const inputFilePath = '/sample.txt';
const input = require('fs')
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split('\n');
//const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input[0]);
const visited = new Array(n).fill(false);
const energies = input[1].split(' ').map(Number);
let orders = [];
let ans = 0;
go(0);

function go(idx) {
  if (idx === n - 2) {
    const check = new Array(n).fill(false);
    let energy = 0;
    for (let i = 0; i < orders.length; i++) {
      check[orders[i]] = true;
      let [left, right] = [orders[i], orders[i]];
      for (let j = orders[i] - 1; j >= 0; j--) {
        if (check[j] === false) {
          left = j;
          break;
        }
      }
      for (let j = orders[i] + 1; j < n; j++) {
        if (check[j] === false) {
          right = j;
          break;
        }
      }
      energy += energies[left] * energies[right];
    }
    ans < energy ? (ans = energy) : null;
  }
  for (let i = 1; i < n - 1; i++) {
    if (visited[i]) continue;
    orders[idx] = i;
    visited[i] = true;
    go(idx + 1);
    visited[i] = false;
  }
}
console.log(ans);
