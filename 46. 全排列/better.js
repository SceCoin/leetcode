/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 使用的是深度优先遍历, 从[1,2,3]出现3条路径后选择一个又会出现3条路径, 这时候需要把已经走过的路径给删除,
// 等到走完一条后回溯.
// 在代码中就是入栈后再弹出, 并且递归的下去.
var permute = function (nums) {
  const res = [];
  const used = {};

  dfs([]);
  function dfs(path) {
    if (path.length == nums.length) {
      res.push(path.slice());
      return;
    }

    for (const num of nums) {
      if (used[num]) continue;

      path.push(num);
      used[num] = true;
      dfs(path);
      path.pop();
      used[num] = false;
    }
  }

  return res;
};
