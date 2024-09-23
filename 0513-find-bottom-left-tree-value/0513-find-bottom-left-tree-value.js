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
var findBottomLeftValue = function(root) {
    let level = 0, val = 0;
    const DFS = (node, lv) => {
        if(!node) return;
        if(!node.left && !node.right && lv>level){
            val = node.val;
            level = lv;
        }
        DFS(node.left, lv+1);
        DFS(node.right, lv+1);
    }
    DFS(root, 1);
    return val;
};