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
  // 层序遍历就是广度优先遍历, 广度优先用的就不是递归的方式
  // 需要用队列来保存结构
  if (root == null) {
    return [];
  }

  let res = [];
  let queue = [root];

  while (queue.length > 0) {
    let len = queue.length;
    let subRes = [];

    for (let i = 0; i < len; i++) {
      let curr = queue.shift();

      subRes.push(curr.val);

      if (curr.left != null) {
        queue.push(curr.left);
      }

      if (curr.right != null) {
        queue.push(curr.right);
      }
    }

    res.push(subRes);
  }

  return res;
};
