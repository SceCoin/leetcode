/******
 *   思路:
 *      1. 把用到过的值都存到哈希表中, 然后循环数组, 用target-当前值, 得出差值去哈希表中找,
 *      2. 如果找不到就把当前值存到哈希表中, Key为元素, value为索引, 找到了就返回哈希表的索引值和当前索引值
 */

const twoSum = (nums, target) => {
  let prevNums = {}; /**                       */ // 把之前遍历过的值放到哈希表中, 对象就是哈希表

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i]; /**               */ // 获取当前值
    const targetNum = target - currNum; /**   */ // 获取目标元素值
    const targetIndex = prevNums[targetNum]; /***/ // 在哈希表里查找目标值是否存在

    if (targetIndex !== undefined) {
      /**        */ // 存在就返回索引值

      return [targetIndex, i];
    } else {
      prevNums[currNum] = i; /**                */ // 不存在就把当前的值保存进哈希表, 存索引
    }
  }
};
