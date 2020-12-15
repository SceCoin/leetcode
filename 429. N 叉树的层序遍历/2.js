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
  if (root == null) {
    return [];
  }

  const queue = [root];
  const res = [];

  while (queue.length > 0) {
    let len = queue.length;
    let subRes = [];

    while (len > 0) {
      let node = queue.shift();
      len--;

      subRes.push(node.val);

      if (node.children != null) {
        node.children.forEach((child) => {
          queue.push(child);
        });
      }
    }
    res.push(subRes);
  }

  return res;
};
