const nums = [3, 6, 1, 0];
const dominantIndex = function (nums) {
  const largestNum = Math.max(...nums);
  let IdxLargestNum = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== largestNum) {
      if (largestNum / 2 < nums[i]) return -1;
    } else IdxLargestNum = i;
  }
  return IdxLargestNum;
};
console.log(dominantIndex(nums));
