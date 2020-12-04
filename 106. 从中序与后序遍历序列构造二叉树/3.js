/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length == 0) {
    return null;
  }

  let last = postorder.length - 1;
  let root = new TreeNode(postorder[last]);
  let index = inorder.indexOf(postorder[last]);

  root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
  root.right = buildTree(
    inorder.slice(index + 1),
    postorder.slice(index, last)
  );

  return root;
};
