/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

const points = [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  k = 2;

const kClosest = function (points, k) {
  const heap = new Array(10001).fill([0, 0, Infinity]);
  let idxHeap = 0;
  const h_push = point => {
    heap[++idxHeap] = point;
    for (let i = idxHeap; i > 1; i = Math.floor(i / 2)) {
      const [, , pdis] = heap[Math.floor(i / 2)];
      const [, , cdis] = heap[i];
      if (cdis < pdis) {
        const tmp = heap[Math.floor(i / 2)];
        heap[Math.floor(i / 2)] = heap[i];
        heap[i] = tmp;
      } else break;
    }
  };
  const h_pop = () => {
    const point = heap[1];
    heap[1] = heap[idxHeap];
    heap[idxHeap] = [0, 0, Infinity];

    for (let i = 1; i * 2 <= idxHeap; ) {
      const dis = heap[i][2];
      const lDis = heap[i * 2][2];
      const rDis = heap[i * 2 + 1][2];
      if (dis < lDis && dis < rDis) break;
      else if (lDis < rDis) {
        const tmp = heap[i];
        heap[i] = heap[i * 2];
        heap[i * 2] = tmp;
        i = i * 2;
      } else {
        const tmp = heap[i];
        heap[i] = heap[i * 2 + 1];
        heap[i * 2 + 1] = tmp;
        i = i * 2 + 1;
      }
    }
    return [point[0], point[1]];
  };

  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    const dis = Math.pow(x, 2) + Math.pow(y, 2);
    h_push([x, y, dis]);
  }
  const ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(h_pop());
  }
  return ans;
};

console.log(kClosest(points, k));
