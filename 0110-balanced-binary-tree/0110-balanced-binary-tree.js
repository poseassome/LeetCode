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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let balance = true;
    const DFS = node => {
        if(!node) return 0;
        const left = DFS(node.left);
        const right = DFS(node.right);
        if(Math.abs(left-right) > 1) balance = false;
        return 1+Math.max(left, right);
    }
    DFS(root);
    return balance;
};