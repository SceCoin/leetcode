/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // 思路: 使用哈希表映射, Key存字符串, value保存数组

  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    let str = strs[i].split("").sort().join();

    if (map.has(str)) {
      let temp = map.get(str);
      temp.push(strs[i]);
      map.set(str, temp);
    } else {
      map.set(str, [strs[i]]);
    }
  }

  return [...map.values()];
};
