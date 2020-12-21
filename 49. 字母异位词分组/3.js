/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // 思路: 使用哈希, key 保存 字符串, value保存与字符串形同的数组

  const map = new Map();

  for (let str of strs) {
    let sortStr = str.split("").sort().join("");

    if (map.has(sortStr)) {
      map.get(sortStr).push(str);
    } else {
      map.set(sortStr, [str]);
    }
  }

  return [...map.values()];
};
