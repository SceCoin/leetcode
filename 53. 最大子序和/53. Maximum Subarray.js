/**
 *  思路:  用动态规划的方法
 *  1. 设定sum为0 , 然后遍历数组, 如果sum值在添加后面的元素能大于0, 所以是有增益的, 可以继续进行
 *  2. 如果sum变为小于等于0 , 所以就是在降低, sum直接等于下一个元素然后重新开始
 *  3. res用来跟sum比较, 把sum曾经经历过的最大值保存在res
 *
 */

const maxSubArray = (nums) => {
  let res = nums[i];
  let sum = 0;

  for (let num of nums) {
    if (sum > 0) {
      sum += num;
    } else {
      sum = num;
    }

    res = Math.max(res, sum);
  }

  return sum;
};
