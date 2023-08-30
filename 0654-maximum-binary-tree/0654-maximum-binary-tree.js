/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if(!nums.length) return null;
    let mid = Math.max(...nums);
    const root = new TreeNode(mid);
    root.left = constructMaximumBinaryTree(nums.slice(0, nums.indexOf(mid)));
    root.right = constructMaximumBinaryTree(nums.slice( nums.indexOf(mid)+1));
    return root;
};