/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */

// 思路:  因为要找子树, 所以需要先将树序列化成字符串, 然后通过字符串存储到 hash 中来比较是否有重复出现
// 因为树没法直接比较
// 所以具体的递归操作就是 序列化树, 然后进入hash中, 但 map.get(string) == 2时, 说明就重复了, 可以加入结果集

var findDuplicateSubtrees = function (root) {
  let map = new Map();
  let res = [];

  const recursion = (root) => {
    if (root == null) {
      return "#";
    }

    // 序列化 树, 使用前中后序都可以.
    let StringTree =
      root.val + "#" + recursion(root.left) + "#" + recursion(root.right);

    // 通过判断是否存在在 map 中, 不存在就新建, 存在就计数加1
    if (!map.has(StringTree)) {
      map.set(StringTree, 1);
    } else {
      map.set(StringTree, map.get(StringTree) + 1);
    }

    // 保存到结果集中
    if (map.get(StringTree) == 2) {
      res.push(root);
    }

    return StringTree;
  };

  recursion(root);
  return res;
};
