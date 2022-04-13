const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");
const [m, n] = input[0].split(" ").map(Number);
const matrix = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
for (let i = 1; i <= n; i++) {
  matrix.push(input[i].split("").map(Number));
}
const cnt = new Array(n).fill(0).map(() => new Array(m).fill(-1));

const qEmptyRoom = [];
const qWall = [];
qEmptyRoom.unshift([0, 0]);
cnt[0][0] = 0;

while (qEmptyRoom.length || qWall.length) {
  while (qEmptyRoom.length) {
    const [cx, cy] = qEmptyRoom.pop();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [cx + dx[i], cy + dy[i]];
      if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
        if (cnt[nx][ny] === -1 && matrix[nx][ny] === 0) {
          qEmptyRoom.unshift([nx, ny]);
          cnt[nx][ny] = cnt[cx][cy];
        } else if (cnt[nx][ny] === -1 && matrix[nx][ny] === 1) {
          qWall.unshift([nx, ny]);
          cnt[nx][ny] = cnt[cx][cy] + 1;
        }
      }
    }
  }
  while (qWall.length) {
    const [cx, cy] = qWall.pop();
    let check = false;
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [cx + dx[i], cy + dy[i]];
      if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
        if (cnt[nx][ny] === -1 && matrix[nx][ny] === 0) {
          qEmptyRoom.unshift([nx, ny]);
          cnt[nx][ny] = cnt[cx][cy];
          check = true;
        } else if (cnt[nx][ny] === -1 && matrix[nx][ny] === 1) {
          qWall.unshift([nx, ny]);
          cnt[nx][ny] = cnt[cx][cy] + 1;
        }
      }
    }
    if (check) break;
  }
}
console.log(cnt[n - 1][m - 1]);
