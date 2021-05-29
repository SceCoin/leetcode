/**
 * @param {number} target
 * @return {number[][]}
 */
 var findContinuousSequence = function(target) {
    // 滑动窗口, 因为数组里的最大值不会大于 target / 2, 所以只要进行收缩数组的范围, 找到符合的就加入
    let res = []
    let left = 1
    let right = 1
    let sum = 0

    while (left < target / 2) {
      if (sum < target) {
        sum += right
        right++
      } else if (sum > target) {
        sum -= left
        left++
      } else if (sum == target) {
        let ans = []
        for (let i = left; i < right; i++) {
          ans.push(i)
        }
        res.push(ans)
        sum -= left
        left++
      }
    }

    return res
  };
