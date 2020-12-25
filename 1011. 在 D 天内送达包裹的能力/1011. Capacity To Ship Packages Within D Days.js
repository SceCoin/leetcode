/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
  // 思路: 最低运载力为1, 最高运载力就是总和, 然后用二分查找判断运载能够符合在天数内的最低运载

  let left = Math.max(...weights);
  let right = weights.reduce((a, b) => a + b, 0);

  while (left < right) {
    let mid = left + ((right - left) >> 1);

    if (needDay(weights, mid) > D) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

const needDay = (weights, cap) => {
  let day = 1;
  let sum = 0;
  for (let w of weights) {
    if (sum + w <= cap) {
      sum += w;
    } else {
      sum = w;
      day++;
    }
  }
  return day;
};
