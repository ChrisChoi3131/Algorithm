/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let maxNumRight = arr[arr.length - 1];
  arr[arr.length - 1] = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    const tmp = arr[i];
    arr[i] = maxNumRight;
    if (tmp > maxNumRight) maxNumRight = tmp;
  }
  return arr;
};

const arr = [400];
console.log(replaceElements(arr));
