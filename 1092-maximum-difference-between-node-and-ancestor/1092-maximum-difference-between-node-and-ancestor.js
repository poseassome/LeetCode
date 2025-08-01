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
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    let res = 0;
    const DFS = (node, min, max) => {
        if(!node) return;
        res = Math.max(res, node.val-min, max-node.val);
        min = Math.min(min, node.val);
        max = Math.max(max, node.val);
        DFS(node.left, min, max);
        DFS(node.right, min, max);
    }
    DFS(root, root.val, root.val);
    return res;
};