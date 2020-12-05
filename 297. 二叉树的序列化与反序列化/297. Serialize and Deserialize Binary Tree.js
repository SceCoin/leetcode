/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 思路:  递归解法,  DFS
//      序列化很简单, 就是前序遍历, 把树变成字符串
//      反序列化就是构造树, 通过前序遍历来构造树,

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
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
