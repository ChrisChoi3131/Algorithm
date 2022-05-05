/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
  let maxNumConsecutive = 0,
    numConsecutive = 0;

  nums.forEach(num => {
    if (num === 1) numConsecutive++;
    else numConsecutive = 0;
    if (numConsecutive > maxNumConsecutive) maxNumConsecutive = numConsecutive;
  });
  return maxNumConsecutive;
};

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 1, 0, 1]));
