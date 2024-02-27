/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    let res = [];
    const DFS = root => {
        if(!root) return;
        res.push(root.val);
        DFS(root.left);
        DFS(root.right);
    }
    DFS(root1);
    DFS(root2);
    return res.sort((a, b) => a-b);
};