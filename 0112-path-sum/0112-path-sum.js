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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    function DFS(node, sum){
        if(!node) return false;
        if(!node.left && !node.right) return sum+node.val === targetSum;
        return DFS(node.left, sum+node.val) || DFS(node.right, sum+node.val);
    }
    return DFS(root, 0);
};