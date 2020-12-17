/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  let map = {};
  for (let c of s) {
    if (map[c]) {
      map[c]++;
    } else {
      map[c] = 1;
    }
  }

  for (let c of t) {
    if (map[c]) {
      map[c]--;
    } else {
      return false;
    }
  }

  return true;
};
