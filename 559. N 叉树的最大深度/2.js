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
  // 思路: 最大深度所以肯定是需要 Math.max, dfs深度遍历时记录每次的值

  if (root == null) {
    return 0;
  }

  if (root.children == 0) {
    return 1;
  }

  let max = 0;
  root.children.forEach((child) => {
    let depth = maxDepth(child);
    max = Math.max(max, depth);
  });

  return max + 1;
};
