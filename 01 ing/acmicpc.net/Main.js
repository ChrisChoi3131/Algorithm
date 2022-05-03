const inputFilePath = '/sample.txt';
const input = require('fs')
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split('\n');
//const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input[0]);
const check_col = new Array(n).fill(false);
const check_diag = new Array(2 * n - 1).fill(false);
const check_antiDiag = new Array(2 * n - 1).fill(false);
const visited = new Array(n).fill(0).map(() => new Array(n).fill(false));
let ans = 0;
go(0);
function go(row) {
  if (row === n) {
    ans++;
    return;
  }
  for (let col = 0; col < n; col++) {
    if (isVisitable(row, col)) {
      check_col[col] = true;
      check_diag[row + col] = true;
      check_antiDiag[n - 1 - col + row] = true;
      visited[row][col] = true;
      go(row + 1);
      visited[row][col] = false;
      check_col[col] = false;
      check_diag[row + col] = false;
      check_antiDiag[n - 1 - col + row] = false;
    }
  }
}
function isVisitable(row, col) {
  if (check_col[col]) return false;
  if (check_diag[row + col]) return false;
  if (check_antiDiag[n - 1 - col + row]) return false;
  return true;
}
console.log(ans);
