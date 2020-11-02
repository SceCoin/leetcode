/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// 思路: 双指针, 数组的第一个值和最后一个值对调, 第二个和倒二对调, 直到对调完.

var reverseString = function (s) {
  let end = s.length - 1;

  for (let i = 0; i < end; i++) {
    let swap = s[i];
    s[i] = s[end];
    s[end] = swap;
    end = end - 1;
  }

  return s;
};
