/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  // 思路: 栈操作, 单调递增栈.
  //      贪心, 局部最优解,

  if (intervals.length == 0) {
    return 0;
  }
  intervals.sort((a, b) => a[1] - b[1]);

  let res = 0;

  let prevRight = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    let nextLeft = intervals[i][0];
    if (prevRight > nextLeft) {
      res++;
      continue;
    }

    prevRight = intervals[i][1];
  }

  return res;
};
