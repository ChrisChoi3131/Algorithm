const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const [m, n] = input[0].split(" ").map(Number);
const [unripeTomato, ripeTomato] = [0, 1];
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
let head = 0,
  tail = 0;
let q = new Array();
const q_push = (dat) => {
  q[tail++] = dat;
};
const q_pop = () => {
  return q[head++];
};
const q_size = () => tail - head;

let tomatoes = [];
let timeToRipe = new Array(n).fill(0).map(() => new Array(m).fill(0));
let isExistUnripeToamto = false;
let isExistRipeToamto = false;
for (let i = 1; i <= n; i++) {
  const row = input[i].split(" ").map(Number);
  row.indexOf(unripeTomato) !== -1 ? (isExistUnripeToamto = true) : "";
  row.indexOf(ripeTomato) !== -1 ? (isExistRipeToamto = true) : "";
  tomatoes.push(row);
}
if (isExistRipeToamto && !isExistUnripeToamto) {
  console.log(0);
} else if (!isExistRipeToamto) {
  console.log(-1);
} else {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (tomatoes[i][j] === ripeTomato) {
        q_push({ x: i, y: j });
      }
    }
  }
  let maxTime = 0;
  while (q_size()) {
    const { x, y } = q_pop();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (tomatoes[nx][ny] === unripeTomato) {
        if (timeToRipe[nx][ny] === 0) {
          timeToRipe[nx][ny] = timeToRipe[x][y] + 1;
          maxTime < timeToRipe[nx][ny] ? (maxTime = timeToRipe[nx][ny]) : "";
          q_push({ x: nx, y: ny });
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (timeToRipe[i][j] === 0 && tomatoes[i][j] === unripeTomato) {
        console.log(-1);
        process.exit();
      }
    }
  }

  console.log(maxTime);
}
