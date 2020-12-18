/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  // 思路: 共同喜爱餐厅就是找交集, 最少索引就是找交集里 索引的最小和
  //      哈希表的 key 保存的就是 索引和, value 才是交集
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
