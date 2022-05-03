/**
 * @param {number} n
 * @return {boolean}
 */

const isHappy = function (n) {
  const set = new Set();
  while (n !== 1) {
    set.add(n);
    const numSplited = n.toString().split('').map(Number);
    let sum = 0;
    for (const num of numSplited) {
      sum += Math.pow(num, 2);
    }
    n = sum;
    if (set.has(n)) return false;
  }
  return true;
};

console.log(isHappy(22));
