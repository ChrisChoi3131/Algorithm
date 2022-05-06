/**
 * @param {number[]} nums
 * @return {number[]}
 */

// const nums = [0, 2, 1, 4];
const nums = [3, 1, 2, 4];

const sortArrayByParity = function (nums) {
  let pointerFirst = 0;
  let pointerSecond = 0;
  while (pointerFirst !== nums.length && pointerSecond !== nums.length) {
    if (nums[pointerFirst] % 2 === 1 && nums[pointerSecond] % 2 === 1) {
      pointerSecond++;
    } else if (nums[pointerFirst] % 2 === 0 && nums[pointerSecond] % 2 === 1) {
      pointerFirst++;
      pointerSecond++;
    } else if (nums[pointerFirst] % 2 === 1 && nums[pointerSecond] % 2 === 0) {
      if (pointerFirst < pointerSecond) {
        const tmp = nums[pointerFirst];
        nums[pointerFirst] = nums[pointerSecond];
        nums[pointerSecond] = tmp;
      } else pointerSecond++;
    }
    if (nums[pointerFirst] % 2 === 0 && nums[pointerSecond] % 2 === 0) {
      pointerFirst++;
    }
  }
  return nums;
};

console.log(sortArrayByParity(nums));
