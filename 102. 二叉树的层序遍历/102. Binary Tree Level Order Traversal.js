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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 层序遍历, 用队列保存结构,

  if (root == null) {
    return [];
  }

  let res = [];
  let queue = [root];

  while (queue.length !== 0) {
    let subRes = [];
    let len = queue.length; // 特意设定长度是由于队列会弹出, 如果循环里动态获取, 有可能就遍历不到后面

    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      subRes.push(cur.val);

      if (cur.left !== null) {
        queue.push(cur.left);
      }
      if (cur.right !== null) {
        queue.push(cur.right);
      }
    }

    res.push(subRes);
  }

  return res;
};
