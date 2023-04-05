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
var getMinimumDifference = function(root) {
    let prev = Number.MAX_VALUE;
    let min = Number.MAX_VALUE;
    
    function DFS(root){
        if(!root) return;
        DFS(root.left);
        min = Math.min(min, Math.abs(root.val - prev));
        prev = root.val;
        DFS(root.right);
    }
    DFS(root);
    return min;
};