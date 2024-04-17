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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let res = [];
    if(!root) return res;
    const DFS = (root, level) => {
        if(!root) return;
        res[level] = root.val;
        DFS(root.left, level+1);
        DFS(root.right, level+1);
    }
    DFS(root, 0);
    return res;
};