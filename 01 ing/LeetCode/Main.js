/**
 * @param {string} s
 * @return {number}
 */

const s = "aabb";
const firstUniqChar = function (s) {
  const hashmap = {};
  s.split("").map((char, idx) => {
    if (hashmap[char.charCodeAt()]) {
      hashmap[char.charCodeAt()] = { cnt: hashmap[char.charCodeAt()].cnt + 1, idx };
    } else {
      hashmap[char.charCodeAt()] = { cnt: 1, idx };
    }
  });
  let idxFirstUniChar = s.length;
  for (const charCode in hashmap) {
    if (hashmap[charCode].cnt === 1 && idxFirstUniChar > hashmap[charCode].idx) idxFirstUniChar = hashmap[charCode].idx;
  }
  return idxFirstUniChar !== s.length ? idxFirstUniChar : -1;
};

console.log(firstUniqChar(s));
