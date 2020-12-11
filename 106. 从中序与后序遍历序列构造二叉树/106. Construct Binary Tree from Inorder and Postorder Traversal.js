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
// 思路: 因为 是中序和后序,
// 后序的遍历是 左/右/根, 所以也很好找到最后一项就是 根
// 然后依旧通过中序来找到 根的位置, 来区分左右子树, 在把这划分放到 后序遍历的数组里,
// 就可以进行递归处理 左右子树.

var buildTree = function (inorder, postorder) {
  if (inorder.length == 0) {
    return null;
  }

  let last = postorder.length - 1;
  let root = new TreeNode(postorder[last]);
  let mid = inorder.indexOf(postorder[last]);

  root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid));
  root.right = buildTree(inorder.slice(mid + 1), postorder.slice(mid, last));

  return root;
};
