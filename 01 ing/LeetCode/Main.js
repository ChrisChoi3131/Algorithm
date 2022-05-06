const nums = [1, 1, 2];

const removeDuplicates = function (nums) {
  let pValue = nums[0];
  let i = 1;
  for (let j = 1; j < nums.length; j++) {
    if (pValue !== nums[j]) {
      nums[i] = nums[j];
      pValue = nums[j];
      i++;
    }
  }
  return i;
};

removeDuplicates(nums);
