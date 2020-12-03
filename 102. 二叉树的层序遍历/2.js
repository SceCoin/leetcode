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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root == null) {
    return [];
  }

  let res = [];
  let queue = [root];

  while (queue.length > 0) {
    let subRes = [];
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let elem = queue.shift();
      subRes.push(elem.val);

      if (elem.left !== null) {
        queue.push(elem.left);
      }
      if (elem.right !== null) {
        queue.push(elem.right);
      }
    }

    res.push(subRes);
  }

  return res;
};
