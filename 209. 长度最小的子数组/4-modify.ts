function minSubArrayLen(s: number, nums: number[]): number {
  let sum: number[] = [0]
  nums.reduce((prev, curr) => {
    prev += curr
    sum.push(prev)
    return prev
  }, 0)
  console.log(sum)

  let min: number = Infinity
  for (let i:number = 1; i < sum.length; i++) {
    let left: number = 0
    let right: number = sum.length - 1

    while (left <= right) {
      let mid: number = left + ((right - left) >> 1)

      if (sum[i] - sum[mid] < s) {
        right = mid - 1
      } else {
        min = Math.min(min, i - mid)
        left = mid + 1
      }
    }
  }

  return min == Infinity ? 0 : min
};
