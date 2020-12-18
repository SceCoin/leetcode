/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  // 思路:  用 Count计数, 石头里能找到宝石就+1

  let jewel = new Set();
  let res = 0;

  for (let j of J) {
    jewel.add(j);
  }

  for (let s of S) {
    if (jewel.has(s)) {
      res++;
    }
  }

  return res;
};
