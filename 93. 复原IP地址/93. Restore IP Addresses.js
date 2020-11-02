/**
 * @param {string} s
 * @return {string[]}
 */

// 思路:  回溯算法, dfs深度搜索
// 如果片段长度达到4并且指针遍历完所有字符, 添加结果到结果集
// 如果片段长度达到4但是没遍历完, 丢弃结果
// 因为每个片段最多只会有3个字符, 所以进入片段切割里. 如果片段+指针已经大于s字符串长度, 说明越界了
// 片段不能是0x, 0xx之类的

var restoreIpAddresses = function (s) {
  let res = [];

  const dfs = (subRes, start) => {
    if (subRes.length == 4 && start == s.length) {
      res.push(subRes.join("."));
      return;
    }

    if (subRes.length == 4 && start < s.length) {
      return;
    }

    for (let len = 1; len <= 3; len++) {
      if (len != 1 && s[start] == "0") return;
      if (len + start - 1 > s.length) return;

      const str = s.substring(start, start + len);
      if (len == 3 && +str > 255) return;

      subRes.push(str);
      dfs(subRes, start + len);
      subRes.pop();
    }
  };

  dfs([], 0);
  return res;
};
