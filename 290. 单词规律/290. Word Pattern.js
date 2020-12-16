/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  // 思路: 映射关系, 用 map
  let arrS = s.split(" ");
  let arrP = pattern.split("");

  if (arrP.length != arrS.length) {
    return false;
  }
  if (new Set(arrP).size != new Set(arrS).size) {
    return false;
  }

  let i = 0;
  let map = new Map();

  while (i < arrS.length) {
    if (map.has(arrP[i])) {
      if (map.get(arrP[i]) != arrS[i]) {
        return false;
      }
    } else {
      map.set(arrP[i], arrS[i]);
    }
    i++;
  }

  return true;
};
