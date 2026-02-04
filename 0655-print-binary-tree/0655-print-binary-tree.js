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
 * @return {string[][]}
 */
var printTree = function(root) {
    const getDepth = root => root ? Math.max(getDepth(root.left), getDepth(root.right)) + 1 : 0;
    const dep = getDepth(root);
    const res = Array(dep).fill(0).map(_ => Array(2 ** dep - 1).fill(""));

    const DFS = (root, lv = 1, index = 2 ** (dep-lv) - 1) => {
        if(!root) return;
        res[lv-1][index] += root.val;
        DFS(root.left, lv+1, index - 2 ** (dep-lv-1));
        DFS(root.right, lv+1, index + 2 ** (dep-lv-1));
    };
    DFS(root);
    return res;
};