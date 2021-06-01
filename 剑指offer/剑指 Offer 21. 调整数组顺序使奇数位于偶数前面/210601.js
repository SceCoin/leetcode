/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  // 先区分奇偶数组, 然后合并
  let odd = []
  let even = []

  for (let n of nums) {
    if (n % 2 == 0) {
      even.push(n)
    } else {
      odd.push(n)
    }
  }

  return odd.concat(even)
}
