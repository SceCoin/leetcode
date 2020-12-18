/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  // 1. 设置结果
  const result = [];

  // 2. 【优化点 1】排序
  nums.sort((a, b) => a - b);

  // 3. 【去重 1】设置哈希集合
  const set = new Set();

  // 4. 回溯：path -> 路径；sum -> 路径和；index -> 数组索引
  const recursion = (path, sum, index) => {
    // 4.1 循环数组
    for (let i = index; i < nums.length; i++) {
      // 4.2 设置下一次遍历的和
      const nextSum = sum + nums[i];

      // 4.3 【优化点 2】
      // 如果路径和大于目标和，因为我们前面已经排序
      // 所以后面只有等于或者大于当前数字的，中止循环
      if (nextSum > 0 && nextSum > target) {
        break;
      }

      // 4.4 路径 path 添加当前元素
      path.push(nums[i]);

      // 4.5 如果路径长度到 4
      if (path.length === 4) {
        // 4.6 并且路径和等于目标和
        // 【优化点 3】如果不符合这两个条件的，我们就中止掉了
        // 这样就不会进一步递归，从而再咔嚓一刀
        if (nextSum === target) {
          // 4.7 【去重 2】防止路径相同的添加进来
          const pathStr = path.join("-");

          // 4.8 如果有满足条件的，则获取
          if (!set.has(pathStr)) {
            result.push(path.slice());
            set.add(pathStr);
          }
        }
      } else {
        // 4.9 进一步递归
        recursion(path, nextSum, i + 1);
      }

      // 4.10 回溯，吐出刚才路径添加的东西，方便继续下一轮
      path.pop();
    }
  };
  recursion([], 0, 0);

  // 5. 返回结果
  return result;
};
