class RandomizedSet {
  constructor() {
    this.set = new Set();
  }
}
RandomizedSet.prototype.insert = function (val) {
  if (this.set.has(val)) return false;
  else {
    this.set.add(val);
    return true;
  }
};

RandomizedSet.prototype.remove = function (val) {
  if (this.set.has(val)) {
    this.set.delete(val);
    return true;
  } else return false;
};

RandomizedSet.prototype.getRandom = function () {
  const randomIdx = Math.floor(Math.random() * [...this.set.keys()].length);
  return [...this.set.keys()][randomIdx];
};
const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1));
console.log(randomizedSet.remove(2));
console.log(randomizedSet.insert(2));
console.log(randomizedSet.getRandom());
console.log(randomizedSet.remove(1));
console.log(randomizedSet.insert(2));
console.log(randomizedSet.getRandom());
