
const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath).toString().trim().split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [M, N] = input[0].split(" ").map(Number);
const DX = [-1, 0, 0, 1];
const DY = [0, -1, 1, 0];
const q = new Array(1005).fill(0);
let head = 0;
let tail = 0;

const q_push = (dat) => {
  q[tail++] = dat;
};

const q_shift = () => {
  return q[head++];
};
const q_size = () => tail - head;

let list = [];
let c = [];
for (let i = 1; i <= N; i++) {
  let line = input[i].split(" ").map(Number);
  list.push(line);
  c.push(line);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (list[i][j] === 1) {
      q_push({ x: i, y: j });
    }
  }
}
while (q_size() > 0) {
  let curr = q_shift();
  for (let i = 0; i < 4; i++) {
    const nextX = curr.x + DX[i];
    const nextY = curr.y + DY[i];
    if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue;
    if (c[nextX][nextY] === 0) {
      c[nextX][nextY] = c[curr.x][curr.y] + 1;
      q_push({ x: nextX, y: nextY });
    }
  }
}

let max = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (list[i][j] === 0) {
      console.log(-1);
      return;
    }
    if (list[i][j] > max) max = list[i][j];
  }
}
console.log(max - 1);
