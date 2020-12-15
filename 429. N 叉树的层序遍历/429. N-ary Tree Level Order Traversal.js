/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 思路: 层序遍历  队列保存.
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

      if (node.children != null) {
        for (let i = 0; i < node.children.length; i++) {
          queue.push(node.children[i]);
        }
      }
    }

    res.push(subRes);
  }

  return res;
};
