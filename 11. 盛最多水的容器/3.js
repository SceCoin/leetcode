/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let len = height.length;
  let left = 0;
  let right = len - 1;
  let max = 0;

  while (left <= right) {
    let area;
    if (height[left] < height[right]) {
      area = height[left] * (right - left);
      left++;
    } else {
      area = height[right] * (right - left);
      right--;
    }

    max = Math.max(max, area);
  }

  return max;
};
