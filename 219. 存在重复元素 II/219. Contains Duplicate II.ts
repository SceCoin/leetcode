function containsNearbyDuplicate2(nums: number[], k: number): boolean {
  let set = new Set()

  for (let i: number = 0; i < nums.length; i++) {
      if (set.has(nums[i])) {
          return true
      }

      set.add(nums[i])
      if (set.size > k) {
          set.delete(nums[i - k])
      }
  }

  return false
};
