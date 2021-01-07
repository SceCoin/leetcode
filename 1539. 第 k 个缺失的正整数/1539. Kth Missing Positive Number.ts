function findKthPositive(arr: number[], k: number): number {
  let left: number = 0
  let right: number = arr.length

  while (left < right) {
    let mid: number = left + ((right - left) >> 1)
    if (arr[mid] - 1 - mid < k) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left + k
};
