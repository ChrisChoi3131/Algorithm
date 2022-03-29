const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input[0]);

let q;
let head = 0,
  tail = 0;

const q_push = (point) => (q[tail++] = point);
const q_pop = () => q[head++];
const q_size = () => tail - head;

const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
const dy = [-1, 1, -2, 2, -2, 2, -1, 1];
let ans = [];
for (let i = 1; i <= n * 3; i += 3) {
  const l = Number(input[i]);
  (head = 0), (tail = 0);

  let check = new Array(l).fill(0).map(() => new Array(l).fill(0));
  const [sx, sy] = input[i + 1].split(" ").map(Number);
  const [ex, ey] = input[i + 2].split(" ").map(Number);
  if (sx === ex && sy === ey) {
    ans.push(0);
    continue;
  }
  q = [];
  q_push({ x: sx, y: sy });
  while (q_size()) {
    let { x, y } = q_pop();
    for (let i = 0; i < 8; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= l || ny >= l) continue;
      if (check[nx][ny] === 0) {
        check[nx][ny] = check[x][y] + 1;
        if (nx === ex && ny === ey) break;
        q_push({ x: nx, y: ny });
      }
    }
  }
  ans.push(check[ex][ey]);
}
console.log(ans.join("\n"));
