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
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {    
    const DFS = (root, arr) => {
        if(!root) return;
        DFS(root.left, arr);
        DFS(root.right, arr);
        if(!root.left && !root.right) arr.push(root.val);
    }
    
    let arr1 = [], arr2 = [];
    DFS(root1, arr1);
    DFS(root2, arr2);
    return arr1.join() === arr2.join();
};