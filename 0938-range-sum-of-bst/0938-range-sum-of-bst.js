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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    function DFS(node){
        if(!node) return;
        if(node.val < low){
            DFS(node.right);
            return;
        }
        if(node.val > high){
            DFS(node.left);
            return;
        }
        sum += node.val;
        DFS(node.left);
        DFS(node.right);
    }
    DFS(root);
    return sum;
};