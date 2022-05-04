const strs = [''];
// const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

const generateKey = function (str) {
  const strSplited = str.split('');
  const cntAlphabet = new Array(26).fill(0);
  for (let i = 0; i < strSplited.length; i++) {
    const idxAlphabet = strSplited[i].charCodeAt() - 97;
    cntAlphabet[idxAlphabet]++;
  }
  return cntAlphabet.join('#');
};

const groupAnagrams = function (strs) {
  const map = new Map();
  strs.forEach(str => {
    const key = generateKey(str);
    if (map.has(key)) {
      const value = map.get(key);
      value.push(str);
      map.set(key, value);
    } else {
      map.set(key, [str]);
    }
  });
  return [...map.values()];
};

console.log(groupAnagrams(strs));
