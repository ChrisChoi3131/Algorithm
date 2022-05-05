/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const jewels = 'z',
  stones = 'ZZ';

const numJewelsInStones = function (jewels, stones) {
  let numJewelsInStones = 0;
  const setJewels = new Set(jewels.split(''));
  for (const stone of stones.split('')) {
    if (setJewels.has(stone)) numJewelsInStones++;
  }

  return numJewelsInStones;
};
console.log(numJewelsInStones(jewels, stones));
