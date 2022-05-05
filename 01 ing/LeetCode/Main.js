const nums = [1],
  k = 1;

const topKFrequent = function (nums, k) {
  const heap = new Array(nums.length).fill({ cnt: 0 });
  let idxHeap = 0;
  const h_push = cntNum => {
    heap[++idxHeap] = cntNum;
    for (let i = idxHeap; i > 1; i = Math.floor(i / 2)) {
      const cnt = heap[i].cnt;
      const cntParent = heap[Math.floor(i / 2)].cnt;
      if (cnt > cntParent) {
        const tmp = heap[i];
        heap[i] = heap[Math.floor(i / 2)];
        heap[Math.floor(i / 2)] = tmp;
      } else break;
    }
  };
  const h_pop = () => {
    const cntNum = heap[1];
    heap[1] = heap[idxHeap];
    heap[idxHeap--] = { cnt: 0 };
    for (let i = 1; i < idxHeap; ) {
      if (heap[i].cnt > heap[i * 2].cnt && heap[i].cnt > heap[i * 2 + 1].cnt) break;
      else if (heap[i * 2].cnt > heap[i * 2 + 1].cnt) {
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
    return cntNum;
  };

  const cntNums = new Map();
  nums.forEach(num => {
    if (cntNums.has(num)) cntNums.set(num, cntNums.get(num) + 1);
    else cntNums.set(num, 1);
  });
  cntNums.forEach((cnt, num) => {
    h_push({ num, cnt });
  });
  const ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(h_pop().num);
  }
  return ans;
};

console.log(topKFrequent(nums, k));
