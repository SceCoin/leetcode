/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  k = k % nums.length
  let cut: number = nums.length - k
  nums.unshift(...nums.splice(cut))
};
