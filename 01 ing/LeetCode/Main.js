const firstUniqChar = function (s) {
  const sSplited = s.split('');
  const map = new Map();
  for (const char of sSplited) {
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
  }
  for (let i = 0; i < sSplited.length; i++) {
    const char = sSplited[i];
    if (map.get(char) === 1) return i;
  }
  return -1;
};
