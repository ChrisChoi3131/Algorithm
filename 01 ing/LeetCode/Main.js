/**
 * @param {string} s
 * @return {number}
 */

const s = '00011100';
const countBinarySubstrings = function (s) {
  let cntSubString = 0,
    idxCurNum = 0,
    idxNextNum = 1,
    cntCurNum = 0,
    cntNextNum = 0;
  while (true) {
    cntCurNum = 0;
    cntNextNum = 0;
    for (let i = idxCurNum; i < s.length; i++) {
      if (s[i] === s[idxCurNum]) cntCurNum++;
      else {
        idxNextNum = i;
        break;
      }
    }
    if (idxCurNum + cntCurNum === s.length) return cntSubString;
    for (let i = idxNextNum; i < s.length; i++) {
      if (s[i] === s[idxNextNum]) cntNextNum++;
      else {
        idxCurNum = idxNextNum;
        break;
      }
    }
    idxCurNum = idxNextNum;
    cntSubString += Math.min(cntCurNum, cntNextNum);
  }
  return cntSubString;
};

console.log(countBinarySubstrings(s));
