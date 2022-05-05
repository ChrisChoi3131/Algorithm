/**
 * @param {string[]} strings
 * @return {string[][]}
 */
const strings = ['bac', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z'];

const generateKey = function (str) {
  const charCodes = str.split('').map(char => char.charCodeAt());
  while (charCodes[0] !== 0) {
    for (let i = 0; i < charCodes.length; i++) {
      charCodes[i]--;
      if (charCodes[i] === -1) charCodes[i] = 25;
    }
  }
  return charCodes.join('#');
};
const groupStrings = function (strings) {
  const groupShiftedStrs = new Map();
  strings.forEach(str => {
    const key = generateKey(str);
    if (groupShiftedStrs.has(key)) {
      const value = groupShiftedStrs.get(key);
      value.push(str);
      groupShiftedStrs.set(key, value);
    } else groupShiftedStrs.set(key, [str]);
  });
  return [...groupShiftedStrs.values()];
};
console.log(groupStrings(strings));
