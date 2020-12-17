/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  // 思路: 将宝石用 set存储, 遍历石头, 如果子啊 set 中找到得到, 那就计数 + 1
  const set = new Set();
  for (const s of J) {
    set.add(s);
  }
  let ans = 0;
  for (const s of S) {
    if (set.has(s)) {
      ans++;
    }
  }
  return ans;
};
