/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const map = new Map();
  for (const num of nums) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }
  for (const num of nums) if (map.get(num) === 1) return num;
};

console.log(singleNumber([2, 2, 1]));
