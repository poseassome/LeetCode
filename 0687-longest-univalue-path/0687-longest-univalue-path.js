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
var longestUnivaluePath = function(root) {
    let res = 0;
    if(!root) return 0;

    const DFS = (root, parent) => {
        if(!root) return 0;
        let l = DFS(root.left, root.val);
        let r = DFS(root.right, root.val);
        res = Math.max(res, l+r);
        if(root.val === parent) return Math.max(l, r) + 1;
        return 0;
    }

    DFS(root, root.val);
    return res;
};