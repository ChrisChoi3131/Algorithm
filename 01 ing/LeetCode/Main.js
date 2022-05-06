const nums = [1, 0, 1, 1, 0, 1];

const findMaxConsecutiveOnes = function (nums) {
  const d = new Array(nums.length).fill(0).map(() => new Array(2).fill(0));
  d[0][0] = nums[0];
  d[0][1] = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 1) {
      d[i][0] = d[i - 1][0] + 1;
      d[i][1] = d[i - 1][1] + 1;
    } else {
      d[i][0] = 0;
      d[i][1] = d[i - 1][0] + 1;
    }
  }
  return Math.max(...d.flat());
};
findMaxConsecutiveOnes(nums);
