/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
const getModifiedArray = function (length, updates) {
  const arr = new Array(length + 1).fill(0);
  updates.forEach(update => {
    const [idxStart, idxEnd, inc] = update;
    arr[idxStart] += inc;
    arr[idxEnd + 1] -= inc;
  });
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i] + arr[i - 1];
  }
  return arr.splice(0, length);
};

const length = 10,
  updates = [
    [2, 4, 6],
    [5, 6, 8],
    [1, 9, -4],
  ];

console.log(getModifiedArray(length, updates));
