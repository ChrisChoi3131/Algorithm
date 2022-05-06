const arr = [3, 1, 7, 11];
// const arr = [10, 2, 5, 3];

const checkIfExist = function (arr) {
  const map = new Map(arr.map((num, idx) => [num, idx]));
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i] * 2) && map.get(arr[i] * 2) !== i) return true;
  }
  return false;
};
console.log(checkIfExist(arr));
