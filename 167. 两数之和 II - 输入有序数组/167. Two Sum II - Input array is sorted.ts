function twoSum(numbers: number[], target: number): number[] {
  for (let i: number = 0; i < numbers.length; i++) {
    let left: number = i + 1
    let right: number = numbers.length - 1

    while (left <= right) {
      let mid: number = left + ((right - left) >> 1)

      if (numbers[mid] == target - numbers[i]) {
        return [i + 1, mid + 1]
      }

      if (numbers[mid] < target - numbers[i]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
};
