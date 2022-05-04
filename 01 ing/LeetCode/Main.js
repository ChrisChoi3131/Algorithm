/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
  list2 = ['KFC', 'Shogun', 'Burger King'];
// const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
//   list2 = ['KFC', 'Burger King', 'Tapioca Express', 'Shogun'];
const findRestaurant = function (list1, list2) {
  const map1 = new Map(list1.map((menu, idx) => [menu, idx]));
  const map2 = new Map(list2.map((menu, idx) => [menu, idx]));
  const res = [];
  for (const list of map1) {
    const [menu, idx] = list;
    if (map2.get(menu) !== undefined) {
      const sumIdx = idx + map2.get(menu);
      res[sumIdx] === undefined ? (res[sumIdx] = []) : null;
      res[sumIdx].push(menu);
    }
  }
  for (const commonMenu of res) if (commonMenu) return commonMenu;
};

console.log(findRestaurant(list1, list2));
