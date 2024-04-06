function subsetsWithDup(nums: number[]): number[][] {
  const output: number[][] = [[]];
  const count = nums.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  nums.forEach((num, idx) => {
    const subSetLength = idx + 1;
    const buffer: number[] = new Array();
    findSubSets(0, subSetLength, buffer);
  });

  function findSubSets(start: number, subSetLength: number, buffer: number[]) {
    if (buffer.length === subSetLength) {
      output.push(JSON.parse(JSON.stringify(buffer)));
      return;
    }
    for (let idxNum = start; idxNum < nums.length; idxNum++) {
      if (count[nums[idxNum]] === 0) continue;
      count[nums[idxNum]]--;
      buffer.push(nums[idxNum]);
      findSubSets(idxNum + 1, subSetLength, buffer);
      buffer.pop();
      count[nums[idxNum]]++;
    }
  }
  return output;
}
subsetsWithDup([1, 2, 2]);
