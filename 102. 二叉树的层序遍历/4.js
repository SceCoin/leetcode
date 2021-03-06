/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root == null) {
    return [];
  }

  let queue = [root];
  let res = [];

  while (queue.length > 0) {
    let len = queue.length;
    let subRes = [];

    while (len > 0) {
      let node = queue.shift();
      len--;

      subRes.push(node.val);

      if (node.left != null) {
        queue.push(node.left);
      }

      if (node.right != null) {
        queue.push(node.right);
      }
    }
    res.push(subRes);
  }

  return res;
};
