/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  let res = [];

  const recursion = (root) => {
    if (root == null) {
      return null;
    }

    res.push(root.val);

    root.children.forEach((child) => {
      recursion(child);
    });
  };

  recursion(root);
  return res;
};
