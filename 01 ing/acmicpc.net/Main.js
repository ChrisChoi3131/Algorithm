const inputFilePath = "/sample.txt";
const input = require("fs")
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .split("\n");
// const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const time = new Array(100000 + 1).fill(0);
const prePoint = new Array(100000 + 1);
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
let route = [];
function findRoute(point) {
  if (point === n) return route.push(point);
  route.push(point);
  return findRoute(prePoint[point]);
}

q_push(n);
while (q_size()) {
  const currPoint = q_pop();
  if (currPoint === k) break;
  const currTime = time[currPoint];
  nextPoints(currPoint).forEach((nextPoint) => {
    if (!time[nextPoint]) {
      q_push(nextPoint);
      time[nextPoint] = currTime + 1;
      prePoint[nextPoint] = currPoint;
    }
  });
}
findRoute(k);
console.log(time[k]);
console.log(route.reverse().join(" "));
