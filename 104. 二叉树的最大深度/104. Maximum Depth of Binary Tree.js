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
 * @return {number}
 */

// 思路:  求深度就是求高度. 树的高度肯定由根节点与它的左右子树的高度有关, 子树又是自己的节点跟自己的左右子树
//       所以它一定是递归执行. 大问题分解成小问题, 从最小的开始入手. 就是判断左右已经完成深度递归加自己, 得出 max(L, R) + 1
//       那么每一次都是如此, 所以递归就是直接这么写就可以了

var maxDepth2 = function (root) {
  let res = 0;

  function depth(root) {
    if (!root) {
      return 0;
    }

    let L = depth(root.left);
    let R = depth(root.right);

    return Math.max(L, R) + 1;
  }

  res = depth(root);
  return res;
};

const maxDepth = function (root) {
  if (root) {
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  }

  return 0;
};
