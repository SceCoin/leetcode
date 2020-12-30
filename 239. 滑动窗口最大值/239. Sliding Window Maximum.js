/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 思路: 用队列来实现滑动窗口, 队列长度固定为k, 然后在 队列里找最大值

  const deque = [];
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i - deque[0] >= k) {
      deque.shift();
    }

    while (nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }

  return res;
};
