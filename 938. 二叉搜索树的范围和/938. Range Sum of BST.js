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

// 递归, 深度优先 DFS , 递归一定要记得终止条件, 还有额外附加优化的点
var rangeSumBST = function (root, low, high) {
  let res = 0;

  const recursion = (root) => {
    if (!root) {
      return;
    }

    if (root.val >= low && root.val <= high) {
      res += root.val;
    }

    if (root.val >= low) {
      // 多的判断可以少扫描节点, 不然直接递归会全扫描
      recursion(root.left);
    }

    if (root.val <= high) {
      recursion(root.right);
    }
  };

  recursion(root);
  return res;
};
