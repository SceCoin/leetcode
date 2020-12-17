/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  // 思路: 哈希表 一一映射, 并且需要先去重,

  const map = new Map();
  const arrp = pattern.split("");
  const arrs = s.split(" ");

  if (arrp.length != arrs.length) {
    return false;
  }
  if (new Set(arrp).size != new Set(arrs).size) {
    return false;
  }

  for (let i = 0; i < arrp.length; i++) {
    if (map.has(arrp[i])) {
      if (map.get(arrp[i]) != arrs[i]) {
        return false;
      }
    } else {
      map.set(arrp[i], arrs[i]);
    }
  }

  return true;
};
