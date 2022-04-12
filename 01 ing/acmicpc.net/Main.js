const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");
const [n, k] = input[0].split(" ").map(Number);
const q = new Array(Math.max(n, k) * 2 + 1);
let head = 0,
  tail = 0;
const q_push = (ele) => (q[tail++] = ele);
const q_pop = () => q[head++];
const q_size = () => tail - head;
const time = new Array(Math.max(n, k) * 2 + 1).fill(-1);

q_push(n);
time[n] = 0;
while (q_size()) {
  const currPoint = q_pop();
  let nextPoint = currPoint;
  while (currPoint !== 0 && nextPoint <= time.length) {
    nextPoint = 2 * nextPoint;
    if (nextPoint <= time.length && time[nextPoint] === -1) {
      time[nextPoint] = time[currPoint];
      q_push(nextPoint);
    }
  }
  if (currPoint - 1 >= 0 && time[currPoint - 1] === -1) {
    time[currPoint - 1] = time[currPoint] + 1;
    q_push(currPoint - 1);
  }
  if (currPoint + 1 <= k && time[currPoint + 1] === -1) {
    time[currPoint + 1] = time[currPoint] + 1;
    q_push(currPoint + 1);
  }
}
console.log(time[k]);
