const arr = [1, 2, 3];

const validMountainArray = function (arr) {
  let isArrivedTop = false;
  let idxTop = 0;
  for (let i = 1; i < arr.length; i++) {
    if (isArrivedTop) {
      if (arr[i - 1] > arr[i]) continue;
      else if (arr[i - 1] <= arr[i]) return false;
    } else {
      if (arr[i - 1] < arr[i]) continue;
      else if (arr[i - 1] > arr[i]) {
        isArrivedTop = true;
        idxTop = i - 1;
      } else return false;
    }
  }
  if (idxTop === 0) return false;
  else return true;
};

console.log(validMountainArray(arr));
