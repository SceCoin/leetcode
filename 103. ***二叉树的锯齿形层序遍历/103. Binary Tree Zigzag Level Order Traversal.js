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
var zigzagLevelOrder = function (root) {
  // 思路: 层序遍历 广度优先 队列
  if (root == null) {
    return [];
  }

  const queue = [root];
  const res = [];

  while (queue.length > 0) {
    let len = queue.length;
    const subRes = [];

    while (len > 0) {
      const node = queue.shift();
      len--;

      subRes.push(node.val);

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    if (res.length % 2 !== 0) {
      res.push(subRes.reverse());
    } else {
      res.push(subRes);
    }
  }

  return res;
};
