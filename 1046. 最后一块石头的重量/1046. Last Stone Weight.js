/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  // 思路: 按照题目意思写代码, 降序排序, 然后把最大两块赋值x, y, 按照要求进行判断后修改数组就可以了

  stones.sort((a, b) => b - a);
  let x = stones[1];
  let y = stones[0];

  while (stones.length > 1) {
    if (x == y) {
      stones.splice(0, 2);
    }
    if (x != y) {
      stones[0] = y - x;
      stones.splice(1, 1);
    }

    stones.sort((a, b) => b - a);
    x = stones[1];
    y = stones[0];
  }

  if (stones.length == 0) {
    return 0;
  } else {
    return stones[0];
  }
};
