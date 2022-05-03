const nums = [3, 2, 4],
  target = 6;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const compli = target - nums[i];
    if (map.has(nums[i])) return [i, map.get(nums[i])];
    else map.set(compli, i);
  }
};

console.log(twoSum(nums, target));
