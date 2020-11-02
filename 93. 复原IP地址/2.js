/**
 * @param {string} s
 * @return {string[]}
 */
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

      const str = s.slice(start, len + start);
      if (len == 3 && +str > 255) return;

      subRes.push(str);
      dfs(subRes, start + len);
      subRes.pop();
    }
  };

  dfs([], 0);
  return res;
};
