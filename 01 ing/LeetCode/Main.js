/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// const nums1 = [1, 2, 3, 0, 0, 0],
//   m = 3,
//   nums2 = [2, 5, 6],
//   n = 3;
// const nums1 = [1],
//   m = 1,
//   nums2 = [],
//   n = 0;
// const nums1 = [
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   ],
//   m = 0,
//   nums2 = [
//     -50, -50, -48, -47, -44, -44, -37, -35, -35, -32, -32, -31, -29, -29, -28, -26, -24, -23, -23, -21, -20, -19, -17,
//     -15, -14, -12, -12, -11, -10, -9, -8, -5, -2, -2, 1, 1, 3, 4, 4, 7, 7, 7, 9, 10, 11, 12, 14, 16, 17, 18, 21, 21, 24,
//     31, 33, 34, 35, 36, 41, 41, 46, 48, 48,
//   ],
//   n = 63;

const nums1 = [-1, 1, 2, 3, 4, 5],
  m = 6,
  nums2 = [],
  n = 0;

const merge = function (nums1, m, nums2, n) {
  let left = m - 1;
  let right = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (left === -1 || nums1[left] < nums2[right]) {
      nums1[i] = nums2[right];
      right--;
    } else {
      nums1[i] = nums1[left];
      left--;
    }
    if (right === -1) break;
  }
  console.log();
};
console.log(merge(nums1, m, nums2, n));
