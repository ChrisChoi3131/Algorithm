const nums = [2, 2, 3, 1];

const thirdMax = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
    if (set.size > 3) set.delete(Math.min(...set.values()));
  }
  if (set.size >= 3) return Math.min(...set.values());
  else return Math.max(...set.values());
};
thirdMax(nums);
