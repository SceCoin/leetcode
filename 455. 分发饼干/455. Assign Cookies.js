/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 思路: g和s存在映射关系, 遍历 g 的值在 s中能找到 大于或等于 它的值就可以计数+1, 不过复杂度是 O(n2)

  let res = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let start = 0;

  for (let i = 0; i < g.length; i++) {
    while (start < s.length) {
      if (s[start] >= g[i]) {
        res++;
        start++;
        break;
      }
      start++;
    }
  }

  return res;
};
