const inputFilePath = '/sample.txt';
const input = require('fs')
  .readFileSync(__dirname + inputFilePath)
  .toString()
  .trim()
  .split('\n');
//const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input[0]);
const heapMax = new Array(n + 1).fill(-Infinity);
const heapMin = new Array(n + 1).fill(Infinity);
let idxHeapMax = 0;
let idxHeapMin = 0;

const hmax_push = num => {
  heapMax[++idxHeapMax] = num;
  for (let i = idxHeapMax; i > 1; i = Math.floor(i / 2)) {
    if (heapMax[i] > heapMax[Math.floor(i / 2)]) {
      const tmp = heapMax[Math.floor(i / 2)];
      heapMax[Math.floor(i / 2)] = heapMax[i];
      heapMax[i] = tmp;
    } else break;
  }
};
const hmin_push = num => {
  heapMin[++idxHeapMin] = num;
  for (let i = idxHeapMin; i > 1; i = Math.floor(i / 2)) {
    if (heapMin[i] < heapMin[Math.floor(i / 2)]) {
      const tmp = heapMin[Math.floor(i / 2)];
      heapMin[Math.floor(i / 2)] = heapMin[i];
      heapMin[i] = tmp;
    } else break;
  }
};

const hmax_pop = () => {
  const num = heapMax[1];
  heapMax[1] = heapMax[idxHeapMax];
  heapMax[idxHeapMax--] = -Infinity;
  for (let i = 1; i * 2 <= idxHeapMax; ) {
    if (heapMax[i] > heapMax[i * 2] && heapMax[i] > heapMax[i * 2 + 1]) break;
    else if (heapMax[i * 2] > heapMax[i * 2 + 1]) {
      const tmp = heapMax[i];
      heapMax[i] = heapMax[i * 2];
      heapMax[i * 2] = tmp;
      i = i * 2;
    } else {
      const tmp = heapMax[i];
      heapMax[i] = heapMax[i * 2 + 1];
      heapMax[i * 2 + 1] = tmp;
      i = i * 2 + 1;
    }
  }
  return num;
};

const hmin_pop = () => {
  const num = heapMin[1];
  heapMin[1] = heapMin[idxHeapMin];
  heapMin[idxHeapMin--] = Infinity;
  for (let i = 1; i * 2 <= idxHeapMin; ) {
    if (heapMin[i] < heapMin[i * 2] && heapMin[i] < heapMin[i * 2 + 1]) break;
    else if (heapMin[i * 2] < heapMin[i * 2 + 1]) {
      const tmp = heapMin[i];
      heapMin[i] = heapMin[i * 2];
      heapMin[i * 2] = tmp;
      i = i * 2;
    } else {
      const tmp = heapMin[i];
      heapMin[i] = heapMin[i * 2 + 1];
      heapMin[i * 2 + 1] = tmp;
      i = i * 2 + 1;
    }
  }
  return num;
};

let ans = '';
for (let i = 1; i <= n; i++) {
  const num = Number(input[i]);
  if (num < heapMin[1]) hmax_push(num);
  else hmin_push(num);
  if (Math.abs(idxHeapMax - idxHeapMin) > 1) {
    if (idxHeapMax > idxHeapMin) {
      hmin_push(hmax_pop());
    } else {
      hmax_push(hmin_pop());
    }
  }
  if (i % 2 === 1) {
    if (idxHeapMax > idxHeapMin) {
      ans += heapMax[1] + '\n';
    } else {
      ans += heapMin[1] + '\n';
    }
  } else {
    ans += Math.min(heapMax[1], heapMin[1]) + '\n';
  }
}
console.log(ans);
