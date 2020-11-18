/**
 * @param {number[]} height
 * @return {number}
 */

// 左右双指针, 夹逼方式求最大值, 先按照宽度最大来往内部缩进.

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  for (let i = 0; i < height.length; i++) {
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
