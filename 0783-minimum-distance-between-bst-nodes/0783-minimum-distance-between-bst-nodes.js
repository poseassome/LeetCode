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
var minDiffInBST = function(root) {
    let min = Number.MAX_SAFE_INTEGER, prev = Number.MIN_SAFE_INTEGER;
    const DFS = node => {
        if(!node) return;
        DFS(node.left);
        min = Math.min(node.val-prev, min);
        prev = node.val;
        DFS(node.right);
    }
    
    DFS(root, min, prev);
    return min;
};