/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], s[i] + map.get(s[i]));
    } else {
      map.set(s[i], s[i]);
    }
  }

  return Array.from(map.values())
    .sort((a, b) => b.length - a.length)
    .join("");
};
