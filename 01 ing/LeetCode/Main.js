const sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  const arrSortedSquares = new Array(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      arrSortedSquares[i] = nums[left] * nums[left];
      left++;
    } else {
      arrSortedSquares[i] = nums[right] * nums[right];
      right--;
    }
  }
  return arrSortedSquares;
};

const nums = [-4, -1, 0, 0, 3, 10];

console.log(sortedSquares(nums));
