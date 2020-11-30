/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// 思路: 因为前序遍历的 是 根/左/右, 所以 前序的第一个节点一定是根,
// 然后就是在中序遍历里找到根的位置, 因为中序是 左/根/右/, 那么就很好定位出 左子树和右子树的范围
// 再进行递归时, 就是分割数组, 中序遍历的分割很容易就是, 0-mid和 mid+1 到结束
// 前序因为有了中序的值, 也可以算出范围 , 1 - mid + 1就是左边, mid + 1 到结束就是右边

var buildTree = function (preorder, inorder) {
  if (inorder.length == 0) {
    return null;
  }

  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(preorder[0]);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
};
