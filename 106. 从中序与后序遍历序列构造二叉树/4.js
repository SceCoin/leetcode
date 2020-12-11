/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (postorder.length == 0) {
    return null;
  }

  let root = new TreeNode();
  let last = postorder.length - 1;
  root.val = postorder[last];
  let index = inorder.indexOf(postorder[last]);

  root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
  root.right = buildTree(
    inorder.slice(index + 1),
    postorder.slice(index, last)
  );

  return root;
};
