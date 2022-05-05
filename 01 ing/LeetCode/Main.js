/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function (nums) {
  let cntEvenNumber = 0;
  nums.forEach(num => (num.toString().length % 2 === 0 ? cntEvenNumber++ : null));
  return cntEvenNumber;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
