/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // 思路: 1. 直接使用 reverse()
  return s.reverse();

  // 思路: 2. 双向双指针, i在头部, j在尾部, 直接i和j对调完移动一格, 当 i == j时结束
  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }

  // 思路: 3. 进行一次逆序遍历, 然后将元素插入到数组后面之后删除该元素
  let len = s.length;

  for (let i = len - 1; i >= 0; i--) {
    s.push(s[i]);
    s.splice(i, 1);
  }
};
