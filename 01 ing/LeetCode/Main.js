/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */

const boxTypes = [
    [5, 10],
    [2, 5],
    [4, 7],
    [3, 9],
  ],
  truckSize = 10;

const maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => {
    const [unitsOfA, unitsOfB] = [a[1], b[1]];
    return unitsOfB - unitsOfA;
  });
  let cntLoadedBox = 0;
  let cntUnitOfLoadedBox = 0;
  for (let i = 0; i < boxTypes.length; i++) {
    let numOfBox = boxTypes[i][0];
    const numOfUnitsPerBox = boxTypes[i][1];
    while (numOfBox !== 0) {
      cntLoadedBox++;
      cntUnitOfLoadedBox += numOfUnitsPerBox;
      if (cntLoadedBox === truckSize) return cntUnitOfLoadedBox;
      numOfBox--;
    }
  }
  return cntUnitOfLoadedBox;
};
console.log(maximumUnits(boxTypes, truckSize));
