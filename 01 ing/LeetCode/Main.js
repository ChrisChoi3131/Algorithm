/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// const nums = [1, 2, 3, 1, 2, 3],
//   k = 2;
const nums = [1, 2, 3, 1],
  k = 3;

const containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k) {
      return true;
    } else map.set(nums[i], i);
  }
  return false;
};
console.log(containsNearbyDuplicate(nums, k));
