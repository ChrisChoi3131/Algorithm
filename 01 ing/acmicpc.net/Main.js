const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");
const S = Number(input[0]);
const q = [];
let head = 0,
  tail = 0;
const q_push = (ele) => (q[tail++] = ele);
const q_pop = () => q[head++];
const q_size = () => tail - head;
const dist = new Array(S + 1).fill(0).map(() => new Array(S + 1).fill(-1));

q_push([1, 0]);
dist[1][0] = 0;
while (q_size()) {
  const [s, c] = q_pop();
  if (dist[s][s] == -1) {
    dist[s][s] = dist[s][c] + 1;
    q_push([s, s]);
  }
  if (s + c <= S && dist[s + c][c] === -1) {
    dist[s + c][c] = dist[s][c] + 1;
    q_push([s + c, c]);
  }
  if (s - 1 >= 0 && dist[s - 1][c] === -1) {
    dist[s - 1][c] = dist[s][c] + 1;
    q_push([s - 1, c]);
  }
}
let ans = -1;
dist[S].forEach((time) => {
  if (time !== -1) {
    if (ans === -1 || ans > time) ans = time;
  }
});
console.log(ans);
