const nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];

const intersection = function (nums1, nums2) {
  const set = new Set();
  const intersection = new Set();
  for (const num of nums1) set.add(num);
  for (const num of nums2) if (set.has(num)) intersection.add(num, num);
  return [...intersection];
};

console.log(intersection(nums1, nums2));
