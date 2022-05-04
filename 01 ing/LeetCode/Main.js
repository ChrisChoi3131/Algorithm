/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
// const nums1 = [4, 9, 5],
//   nums2 = [9, 4, 9, 8, 4];
// const nums1 = [1, 2, 2, 1],
//   nums2 = [2, 2];

const intersect = function (nums1, nums2) {
  const map = new Map();

  const ans = [];
  nums1.forEach(num => {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  });
  nums2.forEach(num => {
    if (map.has(num) && map.get(num) > 0) {
      map.set(num, map.get(num) - 1);
      ans.push(num);
    }
  });
  return [...ans];
};

console.log(intersect(nums1, nums2));
