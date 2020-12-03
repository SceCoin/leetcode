/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  let res = [];

  const recursion = (root) => {
    if (root == null) {
      return null;
    }

    root.children.forEach((child) => {
      recursion(child);
    });

    res.push(root.val);
  };

  recursion(root);
  return res;
};
