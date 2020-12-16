/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let map = {};

  for (let i = 0; i < list1.length; i++) {
    let index = list2.indexOf(list1[i]);
    if (index != -1) {
      let num = i + index;
      if (map[num]) {
        map[num].push(list1[i]);
      } else {
        map[num] = [list1[i]];
      }
    }
  }

  let min = Math.min(...Object.keys(map));

  return map[min];
};
