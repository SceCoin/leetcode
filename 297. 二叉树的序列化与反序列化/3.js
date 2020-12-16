/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  // 思路: 序列化就是转成字符串
  if (root == null) {
    return "#";
  }

  return root.val + "," + serialize(root.left) + "," + serialize(root.right);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let list = data.split(",");

  const buildTree = (list) => {
    let rootVal = list.shift();
    if (rootVal == "#") {
      return null;
    }

    let root = new TreeNode(rootVal);
    root.left = buildTree(list);
    root.right = buildTree(list);

    return root;
  };

  return buildTree(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
