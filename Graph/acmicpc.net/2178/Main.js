const inputFilePath = "/sample.txt";
let input = require("fs").readFileSync(__dirname + inputFilePath).toString().trim().split("\n");
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const DX = [-1, 0, 0, 1];
const DY = [0, - 1, 1, 0];

const [N, M] = input[0].split(" ").map(Number);
let list = Array.from(Array(N), () => []);
let c = Array.from(Array(N), () => []);
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    list[i][j] = Number(input[i + 1].charAt(j));
    c[i][j] = Number.MAX_VALUE;
  }
}

let queue = [];
c[0][0] = 1;
queue.push({ x: 0, y: 0 });

while (queue.length !== 0) {
  let node = queue.shift();
  let x = node.x;
  let y = node.y;
  for (let i = 0; i < 4; i++) {
    let dx = x + DX[i];
    let dy = y + DY[i];
    if (dx >= 0 && dy >= 0 && dx < N && dy < M) {
      if (c[dx][dy] > c[x][y] + 1 && list[dx][dy] === 1) {
        c[dx][dy] = c[x][y] + 1
        queue.push({ x: dx, y: dy });
      }
    }
  }
}

console.log(c[N - 1][M - 1]);
