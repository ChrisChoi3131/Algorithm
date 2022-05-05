class TwoSum {
  constructor() {
    this.nums = new Map();
  }
}

TwoSum.prototype.add = function (number) {
  if (this.nums.has(number)) this.nums.set(number, this.nums.get(number) + 1);
  else this.nums.set(number, 1);
};

TwoSum.prototype.find = function (value) {
  for (const num of this.nums.keys()) {
    const complement = value - num;
    if (complement !== num) {
      if (this.nums.has(complement)) return true;
    } else {
      if (this.nums.get(complement) > 1) return true;
    }
  }
  return false;
};
const twoSum = new TwoSum();
console.log(twoSum.add(1));
console.log(twoSum.add(3));
console.log(twoSum.add(5));
console.log(twoSum.find(4));
console.log(twoSum.find(7));
