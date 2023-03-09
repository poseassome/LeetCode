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
var sumRootToLeaf = function(root, sum = '') {
    if(!root) return 0;
    const sumVal = sum+root.val;
    if(!root.left && !root.right) return parseInt(sumVal, 2);
    return sumRootToLeaf(root.left, sumVal) + sumRootToLeaf(root.right, sumVal)
};