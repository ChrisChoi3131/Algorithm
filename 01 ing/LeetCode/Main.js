const nums = [0, 1];

const moveZeroes = function (nums) {
  let pointerFirst = 0;
  let pointerSecond = 0;
  while (pointerFirst !== nums.length && pointerSecond !== nums.length) {
    if (nums[pointerFirst] === 0 && nums[pointerSecond] === 0) {
      pointerSecond++;
    } else if (nums[pointerFirst] === 0 && nums[pointerSecond] !== 0) {
      nums[pointerFirst] = nums[pointerSecond];
      nums[pointerSecond] = 0;
    } else if (nums[pointerFirst] !== 0 && nums[pointerSecond] === 0) {
      pointerFirst++;
    } else {
      pointerFirst++;
      pointerSecond < nums.length - 1 ? pointerSecond++ : null;
    }
  }
  return nums;
};
moveZeroes(nums);
