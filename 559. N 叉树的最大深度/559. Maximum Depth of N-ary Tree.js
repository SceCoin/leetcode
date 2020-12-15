/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root == null) {
    return 0;
  }

  if (root.children == null) {
    return 1;
  }

  let max = 0;
  for (let i = 0; i < root.children.length; i++) {
    let depth = maxDepth(root.children[i]);
    max = Math.max(max, depth);
  }

  return max + 1;
};
