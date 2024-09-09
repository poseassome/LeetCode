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
var largestValues = function(root) {
    const DFS = (node, row, res) => {
        if(!node) return res;
        const val = res[row] > node.val ? res[row] : node.val;
        res[row] = val;
        row++;
        DFS(node.left, row, res);
        DFS(node.right, row, res);
        return res;
    }
    return DFS(root, 0, []);
};