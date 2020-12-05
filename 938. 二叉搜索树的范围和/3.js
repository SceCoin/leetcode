/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// 这里没有优化, 可以优化遍历.
var rangeSumBST = function (root, low, high) {
  // 思路: DFS, 就是遍历节点
  let res = 0;

  const recursion = (root, low, high) => {
    if (!root) {
      return 0;
    }

    if (root.val >= low && root.val <= high) {
      res += root.val;
    }

    recursion(root.left, low, high);
    recursion(root.right, low, high);

    return res;
  };

  recursion(root, low, high);
  return res;
};
