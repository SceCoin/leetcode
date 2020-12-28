class NumArray {
  prefixSum: number[]
  constructor(nums: number[]) {
    this.prefixSum = new Array(nums.length + 1)
    this.prefixSum[0] = 0
    for (let i: number = 1; i < nums.length + 1; i++) {
      this.prefixSum[i] = this.prefixSum[i - 1] + nums[i - 1]
    }
  }

  sumRange(i: number, j: number): number {
    if (i === 0) {
      return this.prefixSum[j + 1]
    }

    return this.prefixSum[j + 1] - this.prefixSum[i]
  }
}

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(i,j)
*/
