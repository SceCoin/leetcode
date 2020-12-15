function containsDuplicate3(nums: number[]): boolean {
  let set: number[] = [...new Set(nums)]
  if (set.length == nums.length) {
      return false
  }

  return true
};
