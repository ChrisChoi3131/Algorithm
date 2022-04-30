const inputFilePath = '/sample.txt';
const input = require('fs')
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split('\n');
//const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const [wall, space, coin] = ['#', '.', 'o'];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const [n, m] = input[0].split(' ').map(Number);
const board = input.splice(1, n + 1).map(ele => ele.split(''));
const coins = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === coin) coins.push([i, j]);
  }
}

console.log(go(0, ...coins[0], ...coins[1]));

function go(idx, x1, y1, x2, y2) {
  if (idx === 11) return -1;
  let [isDropFirst, isDropSecond] = [false, false];
  if (x1 < 0 || y1 < 0 || x1 >= n || y1 >= m) isDropFirst = true;
  if (x2 < 0 || y2 < 0 || x2 >= n || y2 >= m) isDropSecond = true;
  if (isDropFirst && isDropSecond) return -1;
  if (isDropFirst || isDropSecond) return idx;

  let ans = -1;
  for (let i = 0; i < 4; i++) {
    let [nx1, ny1, nx2, ny2] = [x1 + dx[i], y1 + dy[i], x2 + dx[i], y2 + dy[i]];
    if (nx1 >= 0 && ny1 >= 0 && nx1 < n && ny1 < m && board[nx1][ny1] === wall) {
      nx1 = x1;
      ny1 = y1;
    }
    if (nx2 >= 0 && ny2 >= 0 && nx2 < n && ny2 < m && board[nx2][ny2] === wall) {
      nx2 = x2;
      ny2 = y2;
    }
    const res = go(idx + 1, nx1, ny1, nx2, ny2);
    if (res === -1) continue;
    if (ans === -1 || ans > res) ans = res;
  }
  return ans;
}
