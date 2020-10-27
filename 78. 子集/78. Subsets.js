/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 回溯算法。
// 单看每个元素，都有两种选择：选入子集中，或不选入子集中。
// 比如[1,2,3]，先考察 1，选或不选，不管选没选 1，都再考察 2，选或不选，以此类推。

var subsets = function (nums) {
  let res = [];

  const dfs = (index, list) => {
    if (index === nums.length) {
      // 指针越界
      res.push(list.slice()); // 存入结果
      return; // 结束递归
    }

    list.push(nums[index]); // 选择这个元素
    dfs(index + 1, list); // 往下递归
    list.pop(); // 递归结束， 撤销选择
    dfs(index + 1, list); // 不选择这个元素，往下递归
  };

  dfs(0, []);

  return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function (nums) {
  let res = [];

  const dfs = (index, list) => {
    res.push(list.slice());

    for (let i = index; i < nums.length; i++) {
      list.push(nums[i]);
      dfs(i + 1, list);
      list.pop();
    }
  };

  dfs(0, []);

  return res;
};
