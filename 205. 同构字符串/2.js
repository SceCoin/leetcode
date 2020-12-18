/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // 思路: 因为是一对一映射, 所以可以用map来保存两个字符串的映射, 转换后在对比一下是否相等,

  const map = new Map();
  const arrs = s.split("");
  const arrt = t.split("");

  if (new Set(arrs).size != new Set(arrt).size) {
    return false;
  }

  for (let i = 0; i < arrs.length; i++) {
    if (map.has(arrs[i])) {
      if (map.get(arrs[i]) != arrt[i]) {
        return false;
      }
    } else {
      map.set(arrs[i], arrt[i]);
    }
  }

  return true;
};
