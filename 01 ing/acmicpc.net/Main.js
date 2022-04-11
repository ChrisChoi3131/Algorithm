const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const time = new Array(100000 + 1).fill(0);
const q = [];
const q_push = (ele) => {
  q[tail++] = ele;
};
const q_pop = () => {
  return q[head++];
};
const q_size = () => {
  return tail - head;
};

let head = 0,
  tail = 0;
const nextPoints = (point) => {
  let nextPoints = [];
  if (point + 1 <= 100000) nextPoints.push(point + 1);
  if (point - 1 >= 0) nextPoints.push(point - 1);
  if (2 * point <= 100000) nextPoints.push(2 * point);
  return nextPoints;
};

q_push(n);
time[n] = 0;
while (q_size()) {
  const currPoint = q_pop();
  if (currPoint === k) break;
  const currTime = time[currPoint];
  nextPoints(currPoint).forEach((nextPoint) => {
    if (!time[nextPoint]) {
      q_push(nextPoint);
      time[nextPoint] = currTime + 1;
    }
  });
}
console.log(time[k]);
