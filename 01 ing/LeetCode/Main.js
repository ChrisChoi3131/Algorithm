/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

const arr = [1, 0, 2, 3, 0, 4, 5, 0];

const duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(arr.length - 1);
      arr.splice(i, 0, 0);
      i++;
    }
  }
  return arr;
};
console.log(duplicateZeros(arr));
