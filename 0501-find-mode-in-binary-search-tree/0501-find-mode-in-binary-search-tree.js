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
var findMode = function(root) {
    let sH = new Map(), max = 0;
    const DFS = node => {
        if(!node) return;
        sH.set(node.val, (sH.get(node.val) || 0)+1);
        max = Math.max(max, sH.get(node.val));
        DFS(node.left);
        DFS(node.right);
    };
    DFS(root);
    let arr = [];
    sH.forEach((val, key) => {
        if(val === max) arr.push(key);
    })
    return arr;
};