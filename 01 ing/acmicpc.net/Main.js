const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");

const n = Number(input[0]);
const map = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));
const group = new Array(n).fill(0).map(() => new Array(n).fill(-1));
const distance = new Array(n).fill(0).map(() => new Array(n).fill(0));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let q = [];
let head = 0,
  tail = 0;
const q_push = (ele) => (q[tail++] = ele);
const q_pop = () => q[head++];
const q_size = () => tail - head;

let groupIdx = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === 1 && group[i][j] === -1) {
      q_push([i, j]);
      group[i][j] = groupIdx;
      while (q_size()) {
        const [cx, cy] = q_pop();
        for (let k = 0; k < 4; k++) {
          const [nx, ny] = [cx + dx[k], cy + dy[k]];
          if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
            if (map[nx][ny] === 1 && group[nx][ny] === -1) {
              group[nx][ny] = groupIdx;
              q_push([nx, ny]);
            }
          }
        }
      }
      groupIdx++;
    }
  }
}
q = [];
(head = 0), (tail = 0);
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (group[i][j] !== -1) q_push([i, j]);
  }
}
while (q_size()) {
  const [cx, cy] = q_pop();
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [cx + dx[i], cy + dy[i]];
    if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
      if (group[nx][ny] === -1) {
        q_push([nx, ny]);
        group[nx][ny] = group[cx][cy];
        distance[nx][ny] = distance[cx][cy] + 1;
      }
    }
  }
}
let ans = -1;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [i + dx[k], j + dy[k]];
      if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
        if (group[i][j] !== group[nx][ny]) {
          if (ans === -1 || ans > distance[i][j] + distance[nx][ny]) {
            ans = distance[i][j] + distance[nx][ny];
          }
        }
      }
    }
  }
}
console.log(ans);
