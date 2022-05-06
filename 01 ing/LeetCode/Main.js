const heights = [1, 2, 3, 4, 5];
const heightChecker = function (heights) {
  const map = new Map();
  heights.forEach(height => {
    if (map.has(height)) map.set(height, map.get(height) + 1);
    else map.set(height, 1);
  });
  let idx = 0;
  let numOfIndices = 0;
  while (idx !== heights.length) {
    const lowestHeight = Math.min(...map.keys());
    const numLowestHeight = map.get(lowestHeight);
    for (let i = idx; i < numLowestHeight + idx; i++) {
      if (lowestHeight !== heights[i]) numOfIndices++;
    }
    idx += numLowestHeight;
    map.delete(lowestHeight);
  }
  return numOfIndices;
};
heightChecker(heights);
