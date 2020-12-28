class NumArray {
  nums: number[]
  constructor(nums: number[]) {
    this.nums = nums
  }

  update(i: number, val: number): void {
    this.nums[i] = val
  }

  sumRange(i: number, j: number): number {
    let total: number = 0
    for (let n: number = i; n <= j; n++) {
      total += this.nums[n]
    }

    return total
  }
}

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* obj.update(i,val)
* var param_2 = obj.sumRange(i,j)
*/
