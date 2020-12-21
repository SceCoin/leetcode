/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 思路: 写一个判断数组是否有交集的函数, 然后如果存在交集, 就将这两数组的头和尾形成一个数组,
  //      形成的新数组再跟之后的数组对比, 等到无法合并后加入到结果集

  let res = [];
  intervals.sort((a, b) => a[0] - b[0]);

  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i];
    if (prev[1] >= curr[0]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      res.push(prev);
      prev = curr;
    }
  }

  res.push(prev);
  return res;
};
